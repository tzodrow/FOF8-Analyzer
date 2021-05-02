using CsvHelper.Configuration.Attributes;

namespace FOF8_Draft_Analyzer.Models
{
    public class DraftPersonal
    {
        [Name("Player_ID")]
        public int PlayerId { get; set; }
        public bool Interviewed { get; set; }
        [Name("Low_Screen_Passes")]
        public int LowScreenPasses { get; set; }
        [Name("Low_Short_Passes")]
        public int LowShortPasses { get; set; }
        [Name("Low_Medium_Passes")]
        public int LowMediumPasses { get; set; }
        [Name("Low_Long_Passes")]
        public int LowLongPasses { get; set; }
        [Name("Low_Deep_Passes")]
        public int LowDeepPasses { get; set; }
        [Name("Low_Third_Down")]
        public int LowThirdDown { get; set; }
        [Name("Low_Run_Frequency")]
        public int LowRunFrequency { get; set; }
        [Name("Low_Future_1")]
        public int LowFutureOne { get; set; }
        [Name("Low_Accuracy")]
        public int LowAccuracy { get; set; }
        [Name("Low_Timing")]
        public int LowTiming { get; set; }
        [Name("Low_Sense_Rush")]
        public int LowSenseRush { get; set; }
        [Name("Low_Read_Defense")]
        public int LowReadDefense { get; set; }
        [Name("Low_Two-Minute_Offense")]
        public int LowTwoMinuteOffense { get; set; }
        [Name("Low_Future_2")]
        public int LowFutureTwo { get; set; }
        [Name("Low_Future_3")]
        public int LowFutureThree { get; set; }
        [Name("Low_Future_4")]
        public int LowFutureFour { get; set; }
        [Name("Low_Future_5")]
        public int LowFutureFive { get; set; }
        [Name("Low_Future_6")]
        public int LowFutureSix { get; set; }
        [Name("Low_Speed")]
        public int LowSpeed { get; set; }
        [Name("Low_Power_Inside")]
        public int LowPowerInside { get; set; }
        [Name("Low_Third-Down_Runs")]
        public int LowThirdDownRuns { get; set; }
        [Name("Low_Hole_Recognition")]
        public int LowHoleRecognition { get; set; }
        [Name("Low_Elusiveness")]
        public int LowElusiveness { get; set; }
        [Name("Low_Speed_Outside")]
        public int LowSpeedOutside { get; set; }
        [Name("Low_Blitz_Pickup")]
        public int LowBlitzPickup { get; set; }
        [Name("Low_Avoid_Drops")]
        public int LowAvoidDrops { get; set; }
        [Name("Low_Get_Downfield")]
        public int LowGetDownfield { get; set; }
        [Name("Low_Route_Running")]
        public int LowRouteRunning { get; set; }
        [Name("Low_Third-Down_Receiving")]
        public int LowThirdDownReceiving { get; set; }
        [Name("Low_Big_Play_Receiving")]
        public int LowBigPlayReceiving { get; set; }
        [Name("Low_Courage")]
        public int LowCourage { get; set; }
        [Name("Low_Adjust_to_Ball")]
        public int LowAdjusttoBall { get; set; }
        [Name("Low_Punt_Returns")]
        public int LowPuntReturns { get; set; }
        [Name("Low_Kick_Returns")]
        public int LowKickReturns { get; set; }
        [Name("Low_Future_7")]
        public int LowFutureSeven { get; set; }
        [Name("Low_Run_Blocking")]
        public int LowRunBlocking { get; set; }
        [Name("Low_Pass_Blocking")]
        public int LowPassBlocking { get; set; }
        [Name("Low_Blocking_Strength")]
        public int LowBlockingStrength { get; set; }
        [Name("Low_Punting_Power")]
        public int LowPuntingPower { get; set; }
        [Name("Low_Hang_Time")]
        public int LowHangTime { get; set; }
        [Name("Low_Directional_Punting")]
        public int LowDirectionalPunting { get; set; }
        [Name("Low_Kickoff_Distance")]
        public int LowKickoffDistance { get; set; }
        [Name("Low_Kickoff_Hang_Time")]
        public int LowKickoffHangTime { get; set; }
        [Name("Low_Kicking_Accuracy")]
        public int LowKickingAccuracy { get; set; }
        [Name("Low_Kicking_Power")]
        public int LowKickingPower { get; set; }
        [Name("Low_Run_Defense")]
        public int LowRunDefense { get; set; }
        [Name("Low_Pass_Rush_Technique")]
        public int LowPassRushTechnique { get; set; }
        [Name("Low_Man-to-Man_Defense")]
        public int LowMantoManDefense { get; set; }
        [Name("Low_Zone_Defense")]
        public int LowZoneDefense { get; set; }
        [Name("Low_Bump-and-Run_Defense")]
        public int LowBumpandRunDefense { get; set; }
        [Name("Low_Pass_Rush_Strength")]
        public int LowPassRushStrength { get; set; }
        [Name("Low_Play_Diagnosis")]
        public int LowPlayDiagnosis { get; set; }
        [Name("Low_Punishing_Hitter")]
        public int LowPunishingHitter { get; set; }
        [Name("Low_Intercepting")]
        public int LowIntercepting { get; set; }
        [Name("Low_Endurance")]
        public int LowEndurance { get; set; }
        [Name("Low_Special_Teams")]
        public int LowSpecialTeams { get; set; }
        [Name("Low_Long_Snapping")]
        public int LowLongSnapping { get; set; }
        [Name("Low_Kick_Holding")]
        public int LowKickHolding { get; set; }
        [Name("High_Screen_Passes")]
        public int HighScreenPasses { get; set; }
        [Name("High_Short_Passes")]
        public int HighShortPasses { get; set; }
        [Name("High_Medium_Passes")]
        public int HighMediumPasses { get; set; }
        [Name("High_Long_Passes")]
        public int HighLongPasses { get; set; }
        [Name("High_Deep_Passes")]
        public int HighDeepPasses { get; set; }
        [Name("High_Third_Down")]
        public int HighThirdDown { get; set; }
        [Name("High_Run_Frequency")]
        public int HighRunFrequency { get; set; }
        [Name("High_Future_1")]
        public int HighFutureOne { get; set; }
        [Name("High_Accuracy")]
        public int HighAccuracy { get; set; }
        [Name("High_Timing")]
        public int HighTiming { get; set; }
        [Name("High_Sense_Rush")]
        public int HighSenseRush { get; set; }
        [Name("High_Read_Defense")]
        public int HighReadDefense { get; set; }
        [Name("High_Two-Minute_Offense")]
        public int HighTwoMinuteOffense { get; set; }
        [Name("High_Future_2")]
        public int HighFutureTwo { get; set; }
        [Name("High_Future_3")]
        public int HighFutureThree { get; set; }
        [Name("High_Future_4")]
        public int HighFutureFour { get; set; }
        [Name("High_Future_5")]
        public int HighFutureFive { get; set; }
        [Name("High_Future_6")]
        public int HighFutureSix { get; set; }
        [Name("High_Speed")]
        public int HighSpeed { get; set; }
        [Name("High_Power_Inside")]
        public int HighPowerInside { get; set; }
        [Name("High_Third-Down_Runs")]
        public int HighThirdDownRuns { get; set; }
        [Name("High_Hole_Recognition")]
        public int HighHoleRecognition { get; set; }
        [Name("High_Elusiveness")]
        public int HighElusiveness { get; set; }
        [Name("High_Speed_Outside")]
        public int HighSpeedOutside { get; set; }
        [Name("High_Blitz_Pickup")]
        public int HighBlitzPickup { get; set; }
        [Name("High_Avoid_Drops")]
        public int HighAvoidDrops { get; set; }
        [Name("High_Get_Downfield")]
        public int HighGetDownfield { get; set; }
        [Name("High_Route_Running")]
        public int HighRouteRunning { get; set; }
        [Name("High_Third-Down_Receiving")]
        public int HighThirdDownReceiving { get; set; }
        [Name("High_Big_Play_Receiving")]
        public int HighBigPlayReceiving { get; set; }
        [Name("High_Courage")]
        public int HighCourage { get; set; }
        [Name("High_Adjust_to_Ball")]
        public int HighAdjusttoBall { get; set; }
        [Name("High_Punt_Returns")]
        public int HighPuntReturns { get; set; }
        [Name("High_Kick_Returns")]
        public int HighKickReturns { get; set; }
        [Name("High_Future_7")]
        public int HighFutureSeven { get; set; }
        [Name("High_Run_Blocking")]
        public int HighRunBlocking { get; set; }
        [Name("High_Pass_Blocking")]
        public int HighPassBlocking { get; set; }
        [Name("High_Blocking_Strength")]
        public int HighBlockingStrength { get; set; }
        [Name("High_Punting_Power")]
        public int HighPuntingPower { get; set; }
        [Name("High_Hang_Time")]
        public int HighHangTime { get; set; }
        [Name("High_Directional_Punting")]
        public int HighDirectionalPunting { get; set; }
        [Name("High_Kickoff_Distance")]
        public int HighKickoffDistance { get; set; }
        [Name("High_Kickoff_Hang_Time")]
        public int HighKickoffHangTime { get; set; }
        [Name("High_Kicking_Accuracy")]
        public int HighKickingAccuracy { get; set; }
        [Name("High_Kicking_Power")]
        public int HighKickingPower { get; set; }
        [Name("High_Run_Defense")]
        public int HighRunDefense { get; set; }
        [Name("High_Pass_Rush_Technique")]
        public int HighPassRushTechnique { get; set; }
        [Name("High_Man-to-Man_Defense")]
        public int HighMantoManDefense { get; set; }
        [Name("High_Zone_Defense")]
        public int HighZoneDefense { get; set; }
        [Name("High_Bump-and-Run_Defense")]
        public int HighBumpandRunDefense { get; set; }
        [Name("High_Pass_Rush_Strength")]
        public int HighPassRushStrength { get; set; }
        [Name("High_Play_Diagnosis")]
        public int HighPlayDiagnosis { get; set; }
        [Name("High_Punishing_Hitter")]
        public int HighPunishingHitter { get; set; }
        [Name("High_Intercepting")]
        public int HighIntercepting { get; set; }
        [Name("High_Endurance")]
        public int HighEndurance { get; set; }
        [Name("High_Special_Teams")]
        public int HighSpecialTeams { get; set; }
        [Name("High_Long_Snapping")]
        public int HighLongSnapping { get; set; }
        [Name("High_Kick_Holding")]
        public int HighKickHolding { get; set; }


    }
}
