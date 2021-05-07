import { Attribute } from "../../Enums/Attributes";
import { IPlayer } from "../../Models/IPlayer";

export function getAttributeValue (player: IPlayer, attribute: Attribute, isLow = true) {
    switch (attribute) {
        case Attribute.BumpandRunDefense:
            return isLow ? player.lowBumpandRunDefense : player.highBumpandRunDefense;
        case Attribute.Endurance:
            return isLow ? player.lowEndurance : player.highEndurance;
        case Attribute.Intercepting:
            return isLow ? player.lowIntercepting : player.highIntercepting;
        case Attribute.MantoManDefense:
            return isLow ? player.lowMantoManDefense : player.highMantoManDefense;
        case Attribute.PlayDiagnosis:
            return isLow ? player.lowPlayDiagnosis : player.highPlayDiagnosis;
        case Attribute.PunishingHitter:
            return isLow ? player.lowPunishingHitter : player.highPunishingHitter;
        case Attribute.RunDefense:
            return isLow ? player.lowRunDefense : player.highRunDefense;
        case Attribute.ZoneDefense:
            return isLow ? player.lowZoneDefense : player.highZoneDefense;
        default:
            return 0;
    }
}