using CsvHelper.Configuration.Attributes;

namespace FOF8_Draft_Analyzer.Models
{
    public class Rookie
    {
        [Name("Player_ID")]
        public int PlayerId { get; set; }
        [Name("Last_Name")]
        public string LastName { get; set; }
        [Name("First_Name")]
        public string FirstName { get; set; }
        [Name("Position_Group")]
        public string PositionGroup { get; set; }
        public string College { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        public int Dash { get; set; }
        public int Solecismic { get; set; }
        public int Strength { get; set; }
        public int Agility { get; set; }
        public int Jump { get; set; }
        [Name("Position_Specific")]
        public int PositionSpecific { get; set; }
        public int Developed { get; set; }
        public int Grade { get; set; }
    }
}
