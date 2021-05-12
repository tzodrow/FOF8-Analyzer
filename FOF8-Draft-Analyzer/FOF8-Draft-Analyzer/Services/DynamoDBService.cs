using System;
using System.Collections.Generic;
using System.Net;
using System.Net.NetworkInformation;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Newtonsoft.Json.Linq;

namespace FOF8_Draft_Analyzer
{
    public static partial class DynamoDBService
    {
        /*-----------------------------------------------------------------------------------
          *  If you are creating a client for the Amazon DynamoDB service, make sure your credentials
          *  are set up first, as explained in:
          *  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SettingUp.DynamoWebService.html,
          *
          *  If you are creating a client for DynamoDBLocal (for testing purposes),
          *  DynamoDB-Local should be started first. For most simple testing, you can keep
          *  data in memory only, without writing anything to disk.  To do this, use the
          *  following command line:
          *
          *    java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -inMemory
          *
          *  For information about DynamoDBLocal, see:
          *  https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html.
          *-----------------------------------------------------------------------------------*/

        // So we know whether local DynamoDB is running
        private static readonly string Ip = "localhost";
        private static readonly int Port = 8000;
        private static readonly string EndpointUrl = "http://" + Ip + ":" + Port;

        public static AmazonDynamoDBClient Client { get; private set; }

        private static bool IsPortInUse()
        {
            bool isAvailable = true;

            // Evaluate current system TCP connections. This is the same information provided
            // by the netstat command line application, just in .Net strongly-typed object
            // form.  We will look through the list, and if our port we would like to use
            // in our TcpClient is occupied, we will set isAvailable to false.
            IPGlobalProperties ipGlobalProperties = IPGlobalProperties.GetIPGlobalProperties();
            IPEndPoint[] tcpConnInfoArray = ipGlobalProperties.GetActiveTcpListeners();

            foreach (IPEndPoint endpoint in tcpConnInfoArray)
            {
                if (endpoint.Port == Port)
                {
                    isAvailable = false;
                    break;
                }
            }

            return isAvailable;
        }

        public static bool CreateClient(bool useDynamoDbLocal)
        {
            if (useDynamoDbLocal)
            {
                // First, check to see whether anyone is listening on the DynamoDB local port
                // (by default, this is port 8000, so if you are using a different port, modify this accordingly)
                var portUsed = IsPortInUse();

                if (portUsed)
                {
                    Console.WriteLine("The local version of DynamoDB is NOT running.");
                    return (false);
                }

                // DynamoDB-Local is running, so create a client
                Console.WriteLine("  -- Setting up a DynamoDB-Local client (DynamoDB Local seems to be running)");
                AmazonDynamoDBConfig ddbConfig = new AmazonDynamoDBConfig();
                ddbConfig.ServiceURL = EndpointUrl;
                try
                {
                    Client = new AmazonDynamoDBClient(ddbConfig);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("     FAILED to create a DynamoDBLocal client; " + ex.Message);
                    return false;
                }
            }
            else
            {
                Client = new AmazonDynamoDBClient();
            }

            return true;
        }

        public static async Task<bool> CheckingTableExistenceAsync(string tblNm)
        {
            var response = await DynamoDBService.Client.ListTablesAsync();
            return response.TableNames.Contains(tblNm);
        }

        public static async Task<bool> CreateTableAsync(
            string tableName,
            List<AttributeDefinition> tableAttributes,
            List<KeySchemaElement> tableKeySchema,
            ProvisionedThroughput provisionedThroughput)
        {
            bool response = true;

            // Build the 'CreateTableRequest' structure for the new table
            var request = new CreateTableRequest
            {
                TableName = tableName,
                AttributeDefinitions = tableAttributes,
                KeySchema = tableKeySchema,
                // Provisioned-throughput settings are always required,
                // although the local test version of DynamoDB ignores them.
                ProvisionedThroughput = provisionedThroughput
            };

            try
            {
                var makeTbl = await DynamoDBService.Client.CreateTableAsync(request);
            }
            catch (Exception)
            {
                response = false;
            }

            return response;
        }

        public static async Task<TableDescription> GetTableDescription(string tableName)
        {
            TableDescription result = null;

            // If the table exists, get its description.
            try
            {
                var response = await DynamoDBService.Client.DescribeTableAsync(tableName);
                result = response.Table;
            }
            catch (Exception)
            {}

            return result;
        }
        

        public static async Task<bool> LoadJsonPlayerDataAsync(Table playerTable, JArray playerArray)
        {
            int n = playerArray.Count;
            Console.Write("     -- Starting to load {0:#,##0} player records into the Players table asynchronously...\n" + "" +
              "        Wrote: ", n);
            for (int i = 0, j = 99; i < n; i++)
            {
                try
                {
                    string itemJson = playerArray[i].ToString();
                    Document doc = Document.FromJson(itemJson);
                    Task putItem = playerTable.PutItemAsync(doc);
                    if (i >= j)
                    {
                        j++;
                        Console.Write("{0,5:#,##0}, ", j);
                        if (j % 1000 == 0)
                            Console.Write("\n               ");
                        j += 99;
                    }
                    await putItem;
                }
                catch (Exception)
                {
                    return false;
                }
            }

            return true;
        }
    }
}