import { IColumn } from '@fluentui/react';
import { useState } from 'react';
import { IPlayerAttributeTextFieldProps } from '../Common/Components/PlayerAttributeTextField';
import { IPlayer } from '../Models/IPlayer';
import { BasePlayerTable } from './BasePlayerTable';

const columnMinWidth = 45;
const columns: Array<IColumn> = [
    {
        key: 'avgLow',
        name: 'AvgL',
        fieldName: 'avgLow',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        onRender: (item?: IPlayer) => {
            let value = 0;
            if (item) {
                value = 
                    item.lowSpeed 
                    + item.lowPowerInside 
                    + item.lowThirdDownRuns 
                    + item.lowHoleRecognition 
                    + item.lowElusiveness 
                    + item.lowSpeedOutside 
                    + item.lowBlitzPickup 
                    + item.lowAvoidDrops 
                    + item.lowGetDownfield 
                    + item.lowRouteRunning 
                    + item.lowThirdDownReceiving 
                    + item.lowEndurance 
                    + item.lowSpecialTeams;
                value /= 13;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average Low Rating"
    },
    {
        key: 'avgHigh',
        name: 'AvgH',
        fieldName: 'avgHigh',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        onRender: (item?: IPlayer) => {
            let value = 0;
            if (item) {
                value = 
                    item.highSpeed 
                    + item.highPowerInside 
                    + item.highThirdDownRuns 
                    + item.highHoleRecognition 
                    + item.highElusiveness 
                    + item.highSpeedOutside 
                    + item.highBlitzPickup 
                    + item.highAvoidDrops 
                    + item.highGetDownfield 
                    + item.highRouteRunning 
                    + item.highThirdDownReceiving 
                    + item.highEndurance 
                    + item.highSpecialTeams;
                value /= 13;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    {
        key: 'lowSpeed',
        name: 'LS',
        fieldName: 'lowSpeed',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Speed'
    },
    {
        key: 'highSpeed',
        name: 'HS',
        fieldName: 'highSpeed',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Speed'
    },
    {
        key: 'lowPowerInside',
        name: 'LPI',
        fieldName: 'lowPowerInside',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Power Inside'
    },
    {
        key: 'highPowerInside',
        name: 'HPI',
        fieldName: 'highPowerInside',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Power Inside'
    },
    {
        key: 'lowThirdDownRunning',
        name: 'LTDR',
        fieldName: 'lowThirdDownRuns',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Third Down Running'
    },
    {
        key: 'highThirdDownRunning',
        name: 'HTDR',
        fieldName: 'highThirdDownRuns',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Third Down Running'
    },
    {
        key: 'lowHoleRecognition',
        name: 'LHR',
        fieldName: 'lowHoleRecognition',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Hole Recognition'
    },
    {
        key: 'highHoleRecognition',
        name: 'HHR',
        fieldName: 'highHoleRecognition',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Hole Recognition'
    },
    {
        key: 'lowEndurance',
        name: 'LE',
        fieldName: 'lowEndurance',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Endurance'
    },
    {
        key: 'highEndurance',
        name: 'HE',
        fieldName: 'highEndurance',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Endurance'
    }
];

export interface IRunningbackTableProps {
    players: Array<IPlayer>;
}

export function RunningbackTable(props: IRunningbackTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [speedValue, setSpeedValue] = useState("");
    const [powerInsideValue, setPowerInsideValue] = useState("");
    const [thirdDownRunsValue, setThirdDownRunsValue] = useState("");
    const [holeRecognitionValue, setHoleRecognitionValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const quarterbackFilter = (player: IPlayer) => {
        return player.position === "RB"
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Endurance",
            value: enduranceValue,
            setOnChange: setEnduranceValue
        },
    ];

    return (
        <BasePlayerTable 
            checkLowValue={checkLowValue}
            setCheckLowValue={setCheckLowValue}
            positionColumns={columns}
            players={props.players}
            playerAttributeFilterOptions={playerAttributeFilterOptions}
            onPlayerFilter={quarterbackFilter}
            onClearFiltersClick={onClearFiltersClick}
        />
    );
}