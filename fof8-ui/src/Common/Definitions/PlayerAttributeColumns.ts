import { IColumn } from "@fluentui/react";

export class PlayerAttributeColumn {
    // Adjust to Ball Columns
    static lowAdjustToBallCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowAdjusttoBall',
            name: 'LAtB',
            fieldName: 'lowAdjusttoBall',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Adjust to Ball'
        }
    }

    static highAdjustToBallCol = (columnWidth: number): IColumn => {
        return {
            key: 'highAdjusttoBall',
            name: 'HAtB',
            fieldName: 'highAdjusttoBall',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Adjust to Ball'
        }
    }

    // Avoid Drops Columns
    static lowAvoidDropsCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowAvoidDrops',
            name: 'LAD',
            fieldName: 'lowAvoidDrops',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Avoid Drops'
        }
    };

    static highAvoidDropsCol = (columnWidth: number): IColumn => {
        return {
            key: 'highAvoidDrops',
            name: 'HAD',
            fieldName: 'highAvoidDrops',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Avoid Drops'
        };
    }

    // Big Play Receiving
    static lowBigPlayReceivingCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowBigPlayReceiving',
            name: 'LBPR',
            fieldName: 'lowBigPlayReceiving',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Big Play Receiving'
        };
    }

    static highBigPlayReceivingCol = (columnWidth: number): IColumn => {
        return {
            key: 'highBigPlayReceiving',
            name: 'HBPR',
            fieldName: 'highBigPlayReceiving',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Big Play Receiving'
        };
    }

    // Block Strength Columns
    static lowBlockStrengthCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowBlockingStrength',
            name: 'LBS',
            fieldName: 'lowBlockingStrength',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Blocking Strength'
        };
    }

    static highBlockStrengthCol = (columnWidth: number): IColumn => {
        return {
            key: 'highBlockingStrength',
            name: 'HBS',
            fieldName: 'highBlockingStrength',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Blocking Strength'
        };
    }

    // Bump and Run Defense Columns
    static lowBumpandRunDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowBumpandRunDefense',
            name: 'LBaRD',
            fieldName: 'lowBumpandRunDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Bump and Run Defense'
        };
    }

    static highBumpandRunDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'highBumpandRunDefense',
            name: 'HBaRD',
            fieldName: 'highBumpandRunDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Bump and Run Defense'
        };
    }

    // Courage Columns
    static lowCourageCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowCourage',
            name: 'LC',
            fieldName: 'lowCourage',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Courage'
        };
    }

    static highCourageCol = (columnWidth: number): IColumn => {
        return {
            key: 'highCourage',
            name: 'HC',
            fieldName: 'highCourage',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Courage'
        };
    }

    // Directional Punting Columns
    static lowDirectionalPunting = (columnWidth: number): IColumn => {
        return {
            key: 'lowDirectionalPunting',
            name: 'LDP',
            fieldName: 'lowDirectionalPunting',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Directional Punting'
        };
    }

    static highDirectionalPunting = (columnWidth: number): IColumn => {
        return {
            key: 'highDirectionalPunting',
            name: 'HDP',
            fieldName: 'highDirectionalPunting',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Directional Punting'
        };
    }

    // Endurance Columns
    static lowEnduranceCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowEndurance',
            name: 'LEn',
            fieldName: 'lowEndurance',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Endurance'
        };
    }

    static highEnduranceCol = (columnWidth: number): IColumn => {
        return  {
            key: 'highEndurance',
            name: 'HEn',
            fieldName: 'highEndurance',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Endurance'
        };
    }

    // Get Downfield Columns
    static lowGetDownFieldCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowGetDownfield',
            name: 'HGD',
            fieldName: 'lowGetDownfield',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Get Downfield'
        };
    }

    static highGetDownField = (columnWidth: number): IColumn => {
        return {
            key: 'highGetDownfield',
            name: 'HGD',
            fieldName: 'highGetDownfield',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Get Downfield'
        };
    }

    // Hang Time Columns
    static lowHangTimeCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowHangTime',
            name: 'LHT',
            fieldName: 'lowHangTime',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Hang Time'
        }
    }

    static highHangTimeCol = (columnWidth: number): IColumn => {
        return {
            key: 'highHangTime',
            name: 'HHT',
            fieldName: 'highHangTime',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Hang Time'
        }
    }

    // Intercepting Columns
    static lowInterceptingCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowIntercepting',
            name: 'LI',
            fieldName: 'lowIntercepting',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Intercepting'
        };
    }

    static highInterceptingCol = (columnWidth: number): IColumn => {
        return {
            key: 'highIntercepting',
            name: 'HI',
            fieldName: 'highIntercepting',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Intercepting'
        };
    }

    // Kicking Power Columns
    static lowKickingPowerCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowKickingPower',
            name: 'LKP',
            fieldName: 'lowKickingPower',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Kicking Power'
        };
    }

    static highKickingPowerCol = (columnWidth: number): IColumn => {
        return {
            key: 'highKickingPower',
            name: 'HKP',
            fieldName: 'highKickingPower',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Kicking Power'
        };
    }

    // Man to Man Defense Columns
    static lowMantoManDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowMantoManDefense',
            name: 'LMtMD',
            fieldName: 'lowMantoManDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Man to Man Defense'
        };
    }

    static highMantoManDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'highMantoManDefense',
            name: 'HMtMD',
            fieldName: 'highMantoManDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Man to Man Defense'
        };
    }

    // Pass Blocking Columns
    static lowPassBlockingCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowPassBlocking',
            name: 'LPB',
            fieldName: 'lowPassBlocking',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Pass Blocking'
        };
    }

    static highPassBlockingCol = (columnWidth: number): IColumn => {
        return {
            key: 'highPassBlocking',
            name: 'HPB',
            fieldName: 'highPassBlocking',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Pass Blocking'
        };
    }

    // Pass Rush Strength Columns
    static lowPassRushStrengthCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowPassRushStrength',
            name: 'LPRS',
            fieldName: 'lowPassRushStrength',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Pass Rush Strength'
        };
    }

    static highPassRushStrengthCol = (columnWidth: number): IColumn => {
        return {
            key: 'highPassRushStrength',
            name: 'HPRS',
            fieldName: 'highPassRushStrength',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Pass Rush Strength'
        };
    }

    // Pass Rush Technique Columns
    static lowPassRushTechniqueCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowPassRushTechnique',
            name: 'LPRT',
            fieldName: 'lowPassRushTechnique',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Pass Rush Technique'
        };
    }

    static highPassRushTechniqueCol = (columnWidth: number): IColumn => {
        return {
            key: 'highPassRushTechnique',
            name: 'HPRT',
            fieldName: 'highPassRushTechnique',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Pass Rush Technique'
        };
    }

    // Play Diagnosis Columns
    static lowPlayDiagnosisCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowPlayDiagnosis',
            name: 'LPD',
            fieldName: 'lowPlayDiagnosis',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Play Diagnosis'
        };
    }

    static highPlayDiagnosisCol = (columnWidth: number): IColumn => {
        return {
            key: 'highPlayDiagnosis',
            name: 'HPD',
            fieldName: 'highPlayDiagnosis',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Play Diagnosis'
        };
    }

    // Punishing Hitter Columns
    static lowPunishingHitterCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowPunishingHitter',
            name: 'LPH',
            fieldName: 'lowPunishingHitter',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Punishing Hitter'
        };
    }

    static highPunishingHitterCol = (columnWidth: number): IColumn => {
        return {
            key: 'highPunishingHitter',
            name: 'HPH',
            fieldName: 'highPunishingHitter',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Punishing Hitter'
        };
    }

    // Route Running Columns
    static lowRouteRunningCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowRouteRunning',
            name: 'LRR',
            fieldName: 'lowRouteRunning',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Route Running'
        };
    }

    static highRouteRunningCol = (columnWidth: number): IColumn => {
        return {
            key: 'highRouteRunning',
            name: 'HRR',
            fieldName: 'highRouteRunning',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Route Running'
        }
    }

    // Run Blocking Columns
    static lowRunBlockingCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowRunBlocking',
            name: 'LRB',
            fieldName: 'lowRunBlocking',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Run Blocking'
        };
    }

    static highRunBlockingCol = (columnWidth: number): IColumn => {
        return {
            key: 'highRunBlocking',
            name: 'HRB',
            fieldName: 'highRunBlocking',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Run Blocking'
        };
    }

    // Run Defense Columns
    static lowRunDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowRunDefense',
            name: 'LRD',
            fieldName: 'lowRunDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Run Defense'
        };
    }

    static highRunDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'highRunDefense',
            name: 'HRD',
            fieldName: 'highRunDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Run Defense'
        };
    }

    // Third Down Receiving Columns
    static lowThirdDownReceivingCol = (columnWidth: number): IColumn => {
        return {
            key: 'LowThirdDownReceiving',
            name: 'LTR',
            fieldName: 'lowThirdDownReceiving',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Third Down Receiving'
        };
    }

    static highThirdDownReceivingCol = (columnWidth: number): IColumn => {
        return {
            key: 'highThirdDownReceiving',
            name: 'HTR',
            fieldName: 'highThirdDownReceiving',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Third Down Receiving'
        };
    }

    // Zone Defense Columns
    static lowZoneDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'lowZoneDefense',
            name: 'LZD',
            fieldName: 'lowZoneDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'Low Zone Defense'
        };
    }

    static highZoneDefenseCol = (columnWidth: number): IColumn => {
        return {
            key: 'highZoneDefense',
            name: 'HZD',
            fieldName: 'highZoneDefense',
            minWidth: columnWidth,
            maxWidth: columnWidth,
            ariaLabel: 'High Zone Defense'
        };
    }
}