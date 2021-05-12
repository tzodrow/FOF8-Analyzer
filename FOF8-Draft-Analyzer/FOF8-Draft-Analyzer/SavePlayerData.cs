using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using CsvHelper;
using FOF8_Draft_Analyzer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace FOF8_Draft_Analyzer
{
    public static class SavePlayerData
    {
        [FunctionName("SavePlayerData")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("SavePlayerData function processed a request.");

            using (var reader = new StreamReader(req.Body))
            {
                try 
                {
                    var initialRead = await reader.ReadToEndAsync();
                    log.LogInformation(initialRead);
                    var playerArray = new JArray(initialRead);
                    if (DynamoDBService.CreateClient(true)) {
                        var tblExists = await DynamoDBService.CheckingTableExistenceAsync("Players");
                        if (!tblExists) {
                            var tblCreated = await DynamoDBService.CreateTableAsync(
                                "Players",
                                new List<AttributeDefinition>{ new AttributeDefinition("PlayerId", ScalarAttributeType.S) },
                                new List<KeySchemaElement> { new KeySchemaElement("PlayerId", KeyType.HASH) },
                                new ProvisionedThroughput(5, 5)
                            );
                        }

                        var playerTable = Table.LoadTable(DynamoDBService.Client, "Players");
                        var playersLoaded = await DynamoDBService.LoadJsonPlayerDataAsync(playerTable, playerArray);

                        return new OkObjectResult(playersLoaded);
                    }

                    return new BadRequestObjectResult(false);
                }
                catch (Exception ex) 
                {
                    log.LogError($"Error: {ex.Message}", ex);
                    return new BadRequestObjectResult(ex);
                }

            }
        }
    }
}

