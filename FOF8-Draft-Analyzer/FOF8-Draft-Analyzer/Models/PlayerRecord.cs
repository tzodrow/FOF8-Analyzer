using CsvHelper.Configuration.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace FOF8_Draft_Analyzer.Models
{
    public class PlayerRecord
    {
        [Name("Player_ID")]
        public int PlayerId { get; set; }
        [Name("Uniform_Number")]
        public int UniformNumber { get; set; }
        public string Position { get; set; }
        public int Experience { get; set; }
        [Name("Position_Group")]
        public string PositionGroup { get; set; }
        [Name("Team")]
        public int TeamId { get; set; }
        [Name("Injury_Length")]
        public int InjuryLength { get; set; }
        public string Health { get; set; }
        [Name("Injury_Type")]
        public string InjuryType { get; set; }
        public int Loyalty { get; set; }
        [Name("Play_for_Winner")]
        public int PlayforWinner { get; set; }
        [Name("Personality_Strength")]
        public int PersonalityStrength { get; set; }
        public int Leadership { get; set; }
        public int Intelligence { get; set; }
        [Name("Red_Flag")]
        public bool RedFlag { get; set; }
        public int Mentor { get; set; }
        public int Volatility { get; set; }
        public string Designation { get; set; }
        public string Status { get; set; }
        [Name("Year_Signed")]
        public int YearSigned { get; set; }
        public int Popularity { get; set; }
        [Name("How_Acquired")]
        public string HowAcquired { get; set; }
        [Name("Hall_Of_Fame_Points")]
        public int HallOfFamePoints { get; set; }
        [Name("Contract_Length")]
        public int ContractLength { get; set; }
        [Name("Salary_Year_1")]
        public int SalaryYearOne { get; set; }
        [Name("Salary_Year_2")]
        public int SalaryYearTwo { get; set; }
        [Name("Salary_Year_3")]
        public int SalaryYearThree { get; set; }
        [Name("Salary_Year_4")]
        public int SalaryYearFour { get; set; }
        [Name("Salary_Year_5")]
        public int SalaryYearFive { get; set; }
        [Name("Bonus_Year_1")]
        public int BonusYearOne { get; set; }
        [Name("Bonus_Year_2")]
        public int BonusYearTwo { get; set; }
        [Name("Bonus_Year_3")]
        public int BonusYearThree { get; set; }
        [Name("Bonus_Year_4")]
        public int BonusYearFour { get; set; }
        [Name("Bonus_Year_5")]
        public int BonusYearFive { get; set; }
        public bool Holdout { get; set; }
        [Name("Special_Teams_Designation")]
        public bool SpecialTeamsDesignation { get; set; }
        [Name("Season_Statistics_-_S_Games_Played")]
        public int SeasonStatisticsSGamesPlayed { get; set; }

        // S_Games_Started S_Pass_Attempts S_Pass_Completions  S_Passing_Yards S_Long_Pass S_Touchdown_Passes S_Intercepted   S_Sacked S_Sack_Yards    S_Rushes S_Rushing_Yards S_Long_Rush S_Rushing_Touchdowns    S_Catches S_Receiving_Yards   S_Long_Reception S_Receiving_Touchdowns  S_Targets S_Yards_after_Catch S_Drops S_Punt_Returns  S_Punt_Return_Yards S_Punt_Returns_Touchdowns   S_Kick_Returns S_Kick_Return_Yards S_Kick_Return_Touchdowns S_Fumbles   S_Fumbles_Recovered S_Fumbles_Forced    S_Fumble_Return_Touchdowns S_Key_Run_Blocks    S_Block_Opportunities S_Sacks_Allowed S_Tackles S_Assists   S_Sacks_(x10)   S_Interceptions S_Interception_Return_Yards S_Interception_Return_Touchdowns S_Passes_Defensed   S_Passes_Blocked S_Hurries   S_Caught_Against S_Pass_Plays    S_Run_Plays S_Field_Goals_Made  S_Field_Goals_Attempted S_Long_Field_Goal   S_Points_After_Touchdown S_PATs_Attempted    S_Punts S_Punting_Yards S_Long_Punt S_Punts_Inside_20   S_Points_Scored S_HoF_Points    S_Third_Down_-_Runs S_3D_First_Downs_-_Runs S_3D_Pass_Attempts  S_3D_Completions S_3D_First_Downs_-_Passes S_3D_Targets    S_3D_Catches S_3D_First_Downs_-_Catches S_First_Down_-_Runs S_First_Down_Pass_Attempts  S_First_Down_Catches S_40+_Field_Goals_Attempted S_40+_Field_Goals_Made S_50+_Field_Goals_Attempted S_50+_Field_Goals_Made S_Net_Punting_Yardage   S_Special_Teams_Tackles S_Quarterback_Knocked_Down  S_Red_Zone_-_Runs S_RZ_Rushing_Yards  S_RZ_Pass_Attempts S_RZ_Completions    S_RZ_Passing_Yards S_RZ_Targets    S_RZ_Catches S_RZ_Receiving_Yards    S_Total_Touchdowns S_Two-Point_Conversions S_Pancake_Blocks    S_Quarterback_Knockdowns S_Special_Teams_Plays   S_100-Yard_Rushing_Games S_100-Yard_Receiving_Games S_300-Yard_Passing_Games S_10-Yard_Runs S_20-Yard_Catches S_20-Yard_Completions S_Yards_from_Scrimmage  S_All-Purpose_Yards Playoff_Statistics_-_P_Games_Played P_Games_Started P_Pass_Attempts P_Pass_Completions  P_Passing_Yards P_Long_Pass P_Touchdown_Passes P_Intercepted   P_Sacked P_Sack_Yards    P_Rushes P_Rushing_Yards P_Long_Rush P_Rushing_Touchdowns    P_Catches P_Receiving_Yards   P_Long_Reception P_Receiving_Touchdowns  P_Targets P_Yards_after_Catch P_Drops P_Punt_Returns  P_Punt_Return_Yards P_Punt_Returns_Touchdowns   P_Kick_Returns P_Kick_Return_Yards P_Kick_Return_Touchdowns P_Fumbles   P_Fumbles_Recovered P_FumbleP_Forced    P_Fumble_Return_Touchdowns P_Key_Run_Blocks    P_Block_Opportunities P_Sacks_Allowed P_Tackles P_Assists   P_Sacks_(x10)   P_Interceptions P_Interception_Return_Yards P_Interception_Return_Touchdowns P_Passes_Defensed   P_Passes_Blocked P_Hurries   P_Caught_Against P_Pass_Plays    P_Run_Plays P_Field_Goals_Made  P_Field_Goals_Attempted P_Long_Field_Goal   P_Points_After_Touchdown P_PATs_Attempted    P_Punts P_Punting_Yards P_Long_Punt P_Punts_Inside_20   P_Points_Scored P_HoF_Points    P_Third_Down_-_Runs P_3D_First_Downs_-_Runs P_3D_Pass_Attempts  P_3D_Completions P_3D_First_Downs_-_Passes P_3D_Targets    P_3D_Catches P_3D_First_Downs_-_Catches P_First_Down_-_Runs P_First_Down_Pass_Attempts  P_First_Down_Catches P_40+_Field_Goals_Attempted P_40+_Field_Goals_Made P_50+_Field_Goals_Attempted P_50+_Field_Goals_Made P_Net_Punting_Yardage   P_Special_Teams_Tackles P_Quarterback_Knocked_Down  P_Red_Zone_-_Runs P_RZ_Rushing_Yards  P_RZ_Pass_Attempts P_RZ_Completions    P_RZ_Passing_Yards P_RZ_Targets    P_RZ_Catches P_RZ_Receiving_Yards    P_Total_Touchdowns P_Two-Point_Conversions P_Pancake_Blocks    P_Quarterback_Knockdowns P_Special_Teams_Plays   P_100-Yard_Rushing_Games P_100-Yard_Receiving_Games P_300-Yard_Passing_Games P_10-Yard_Runs P_20-Yard_Catches P_20-Yard_Completions P_Yards_from_Scrimmage  P_All-Purpose_Yards Solecismic_Test	40-Yard_Dash Bench_Press Agility_Drill Broad_Jump  Position_Drill Pointer_to_Active_Free_Agent_Block  Pointer_to_Player_Information_Record

    }
}
