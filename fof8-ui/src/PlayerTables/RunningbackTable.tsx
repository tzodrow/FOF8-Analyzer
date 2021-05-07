import { IColumn } from '@fluentui/react';
import { useState } from 'react';
import { IPlayerAttributeTextFieldProps } from '../Common/Components/PlayerAttributeTextField';
import { PlayerAttributeColumn } from '../Common/Definitions/PlayerAttributeColumns';
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
                    + item.lowEndurance;
                value /= 12;
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
                    + item.highEndurance;
                value /= 12;
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
        key: 'lowElusiveness',
        name: 'LEl',
        fieldName: 'lowElusiveness',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Elusiveness'
    },
    {
        key: 'highElusiveness',
        name: 'HEl',
        fieldName: 'highElusiveness',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Elusiveness'
    },
    {
        key: 'lowSpeedOutside',
        name: 'LSO',
        fieldName: 'lowSpeedOutside',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Speed Outside'
    },
    {
        key: 'highSpeedOutside',
        name: 'HSO',
        fieldName: 'highSpeedOutside',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Speed Outside'
    },
    {
        key: 'lowBlitzPickup',
        name: 'LBP',
        fieldName: 'lowBlitzPickup',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'Low Blitz Pickup'
    },
    {
        key: 'highBlitzPickup',
        name: 'HBP',
        fieldName: 'highBlitzPickup',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: 'High Blitz Pickup'
    },
    PlayerAttributeColumn.lowAvoidDropsCol(columnMinWidth),
    PlayerAttributeColumn.highAvoidDropsCol(columnMinWidth),
    PlayerAttributeColumn.lowGetDownFieldCol(columnMinWidth),
    PlayerAttributeColumn.highGetDownField(columnMinWidth),
    PlayerAttributeColumn.lowRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.highRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.lowThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.highThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.lowEnduranceCol(columnMinWidth),
    PlayerAttributeColumn.highEnduranceCol(columnMinWidth)
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
    const [elusivenessValue, setElusivenessValue] = useState("");
    const [speedOutsideValue, setSpeedOutsideValue] = useState("");
    const [blitzPickupValue, setBlitzPickupValue] = useState("");
    const [avoidDropsValue, setAvoidDropsValue] = useState("");
    const [getDownfieldValue, setGetDownfieldValue] = useState("");
    const [routeRunningValue, setRouteRunningValue] = useState("");
    const [thirdDownReceivingValue, setThirdDownReceivingValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === "RB"
            && (checkLowValue ? player.lowSpeed >= (Number(speedValue)) : player.highSpeed >= (Number(speedValue)))
            && (checkLowValue ? player.lowPowerInside >= (Number(powerInsideValue)) : player.highPowerInside >= (Number(powerInsideValue)))
            && (checkLowValue ? player.lowThirdDownRuns >= (Number(thirdDownRunsValue)) : player.highThirdDownRuns >= (Number(thirdDownRunsValue)))
            && (checkLowValue ? player.lowHoleRecognition >= (Number(holeRecognitionValue)) : player.highHoleRecognition >= (Number(holeRecognitionValue)))
            && (checkLowValue ? player.lowElusiveness >= (Number(elusivenessValue)) : player.highElusiveness >= (Number(elusivenessValue)))
            && (checkLowValue ? player.lowSpeedOutside >= (Number(speedOutsideValue)) : player.highSpeedOutside >= (Number(speedOutsideValue)))
            && (checkLowValue ? player.lowBlitzPickup >= (Number(blitzPickupValue)) : player.highBlitzPickup >= (Number(blitzPickupValue)))
            && (checkLowValue ? player.lowAvoidDrops >= (Number(avoidDropsValue)) : player.highAvoidDrops >= (Number(avoidDropsValue)))
            && (checkLowValue ? player.lowGetDownfield >= (Number(getDownfieldValue)) : player.highGetDownfield >= (Number(getDownfieldValue)))
            && (checkLowValue ? player.lowRouteRunning >= (Number(routeRunningValue)) : player.highRouteRunning >= (Number(routeRunningValue)))
            && (checkLowValue ? player.lowThirdDownReceiving >= (Number(thirdDownReceivingValue)) : player.highThirdDownReceiving >= (Number(thirdDownReceivingValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setSpeedValue("");
        setPowerInsideValue("");
        setThirdDownRunsValue("");
        setHoleRecognitionValue("");
        setElusivenessValue("");
        setSpeedOutsideValue("");
        setBlitzPickupValue("");
        setAvoidDropsValue("");
        setGetDownfieldValue("");
        setRouteRunningValue("");
        setThirdDownReceivingValue("");
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Speed",
            value: speedValue,
            setOnChange: setSpeedValue
        },
        {
            label: "Power Inside",
            value: powerInsideValue,
            setOnChange: setPowerInsideValue
        },
        {
            label: "Third Down Running",
            value: thirdDownRunsValue,
            setOnChange: setThirdDownRunsValue
        },
        {
            label: "Hole Recognition",
            value: holeRecognitionValue,
            setOnChange: setHoleRecognitionValue
        },
        {
            label: "Elusiveness",
            value: elusivenessValue,
            setOnChange: setElusivenessValue
        },
        {
            label: "Speed Outside",
            value: speedOutsideValue,
            setOnChange: setSpeedOutsideValue
        },
        {
            label: "Blitz Pickup",
            value: blitzPickupValue,
            setOnChange: setBlitzPickupValue
        },
        {
            label: "Avoid Drops",
            value: avoidDropsValue,
            setOnChange: setAvoidDropsValue
        },
        {
            label: "Get Downfield",
            value: getDownfieldValue,
            setOnChange: setGetDownfieldValue
        },
        {
            label: "Route Running",
            value: routeRunningValue,
            setOnChange: setRouteRunningValue
        },
        {
            label: "Third Down Receiving",
            value: thirdDownReceivingValue,
            setOnChange: setThirdDownReceivingValue
        },
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
            onPlayerFilter={filter}
            onClearFiltersClick={onClearFiltersClick}
            attributes={[]}
            selectedAttributes={[]}
            setAttributes={() => console.log("Called")}
        />
    );
}