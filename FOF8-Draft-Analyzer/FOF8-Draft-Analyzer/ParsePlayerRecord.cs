using System;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using CsvHelper;
using FOF8_Draft_Analyzer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Extensions.Logging;

namespace FOF8_Draft_Analyzer
{
    public static class ParsePlayerRecord
    {
        [FunctionName("ParsePlayerRecord")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            log.LogInformation("ParsePlayerInformation function processed a request.");

            using (var reader = new StreamReader(req.Body))
            using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
            {
                try
                {
                    var records = csv.GetRecords<PlayerRecord>();
                    var recordsList = records.Where(x => x.Experience == 1).ToList();
                    if (recordsList.Count == 0)
                    {
                        log.LogInformation("No player information was found.");
                    }


                    return new OkObjectResult(recordsList);
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

