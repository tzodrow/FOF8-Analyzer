using CsvHelper.Configuration.Attributes;

namespace FOF8_Draft_Analyzer.Models
{
    public class PlayerInformation
    {
        [Name("Player_ID")]
        public int PlayerId { get; set; }
        [Name("Last_Name")]
        public string LastName { get; set; }
        [Name("First_Name")]
        public string FirstName { get; set; }
        [Name("Junior_Flag")]
        public string JuniorFlag { get; set; }
        public string Nickname { get; set; }
        public string Position { get; set; }
        [Name("Player_of_Game_Count")]
        public int PlayerOfGameCount { get; set; }
        [Name("Championship_Rings")]
        public int ChampionshipRingCount { get; set; }
        [Name("Player_of_the_Week_Count")]
        public int PlayerOfTheWeekCount { get; set; }
        [Name("Player_of_the_Week_Win")]
        public int PlayerOfTheWeekWinCount { get; set; }
        public int Height { get; set; }
        public int Weight { get; set; }
        [Name("Hall_of_Fame_Flag")]
        public bool HallOfFame { get; set; }
        [Name("Year_Inducted")]
        public int HallOfFameYear { get; set; }
        [Name("Percentage_of_Vote")]
        public int PercentageOfVote { get; set; }
        [Name("Chosen_Team")]
        public int ChoosenTeamId { get; set; }
        [Name("Year_Born")]
        public int BornYear { get; set; }
        [Name("Month_Born")]
        public int BornMonth { get; set; }
        [Name("Day_Born")]
        public int BornDay { get; set; }
        [Name("College")]
        public int CollegeId { get; set; }
        [Name("Draft_Round")]
        public int DraftRound { get; set; }
        [Name("Drafted_Position")]
        public int DraftPosition { get; set; }
        [Name("Drafted_By")]
        public int DraftTeamId { get; set; }
        [Name("Draft_Year")]
        public int DraftYear { get; set; }
        [Name("4th_Quarter_Comebacks")]
        public int ForthQuarterComebackCount { get; set; }
        [Name("Quarterback_Wins")]
        public int QuarterbackWinCount { get; set; }
        [Name("Quarterback_Losses")]
        public int QuarterbackLossCount { get; set; }
        [Name("Quarterback_Ties")]
        public int QuarterbackTieCount { get; set; }
        [Name("Home_Town")]
        public int HomeTownId { get; set; }
        [Name("Home_State")]
        public int HomeStateId { get; set; }
        [Name("Career_Games_Played")]
        public int CareerGameCount { get; set; }
        [Name("Number_of_Seasons")]
        public int SeasonCount { get; set; }
        [Name("Season_1_Pointer_to_Player_Year_Data")]
        public int SeasonOnePointer { get; set; }
        [Name("SP_2")]
        public int SeasonTwoPointer { get; set; }
        [Name("SP_3")]
        public int SeasonThreePointer { get; set; }
        [Name("SP_4")]
        public int SeasonFourPointer { get; set; }
        [Name("SP_5")]
        public int SeasonFivePointer { get; set; }
        [Name("SP_6")]
        public int SeasonSixPointer { get; set; }
        [Name("SP_7")]
        public int SeasonSevenPointer { get; set; }
        [Name("SP_8")]
        public int SeasonEightPointer { get; set; }
        [Name("SP_9")]
        public int SeasonNinePointer { get; set; }
        [Name("SP_10")]
        public int SeasonTenPointer { get; set; }
        [Name("SP_11")]
        public int SeasonElvenPointer { get; set; }
        [Name("SP_12")]
        public int SeasonTwelvePointer { get; set; }
        [Name("SP_13")]
        public int SeasonThirteenPointer { get; set; }
        [Name("SP_14")]
        public int SeasonFourteenPointer { get; set; }
        [Name("SP_15")]
        public int SeasonFiftheenPointer { get; set; }
        [Name("SP_16")]
        public int SeasonSixteenPointer { get; set; }
        [Name("SP_17")]
        public int SeasonSeventeenPointer { get; set; }
        [Name("SP_18")]
        public int SeasonEightteenPointer { get; set; }
        [Name("SP_19")]
        public int SeasonNineteenPointer { get; set; }
        [Name("SP_20")]
        public int SeasonTwentyPointer { get; set; }
        [Name("Season_1_Year")]
        public int SeasonOneYear { get; set; }
        [Name("SY_2")]
        public int SeasonTwoYear { get; set; }
        [Name("SY_3")]
        public int SeasonThreeYear { get; set; }
        [Name("SY_4")]
        public int SeasonFourYear { get; set; }
        [Name("SY_5")]
        public int SeasonFiveYear { get; set; }
        [Name("SY_6")]
        public int SeasonSixYear { get; set; }
        [Name("SY_7")]
        public int SeasonSevenYear { get; set; }
        [Name("SY_8")]
        public int SeasonEightYear { get; set; }
        [Name("SY_9")]
        public int SeasonNineYear { get; set; }
        [Name("SY_10")]
        public int SeasonTenYear { get; set; }
        [Name("SY_11")]
        public int SeasonElvenYear { get; set; }
        [Name("SY_12")]
        public int SeasonTwelveYear { get; set; }
        [Name("SY_13")]
        public int SeasonThirteenYear { get; set; }
        [Name("SY_14")]
        public int SeasonFourteenYear { get; set; }
        [Name("SY_15")]
        public int SeasonFiftheenYear { get; set; }
        [Name("SY_16")]
        public int SeasonSixteenYear { get; set; }
        [Name("SY_17")]
        public int SeasonSeventeenYear { get; set; }
        [Name("SY_18")]
        public int SeasonEightteenYear { get; set; }
        [Name("SY_19")]
        public int SeasonNineteenYear { get; set; }
        [Name("SY_20")]
        public int SeasonTwentyYear { get; set; }
    }
}
