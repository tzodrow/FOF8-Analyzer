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
}