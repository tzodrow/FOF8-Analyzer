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
                    item.lowRunBlocking
                    + item.lowPassBlocking
                    + item.lowBlockingStrength 
                    + item.lowPowerInside 
                    + item.lowThirdDownRuns 
                    + item.lowHoleRecognition
                    + item.lowBlitzPickup 
                    + item.lowAvoidDrops 
                    + item.lowRouteRunning 
                    + item.lowThirdDownReceiving 
                    + item.lowEndurance;
                value /= 11;
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
                    item.highRunBlocking
                    + item.highPassBlocking
                    + item.highBlockingStrength 
                    + item.highPowerInside 
                    + item.highThirdDownRuns 
                    + item.highHoleRecognition
                    + item.highBlitzPickup 
                    + item.highAvoidDrops 
                    + item.highRouteRunning 
                    + item.highThirdDownReceiving 
                    + item.highEndurance;
                value /= 11;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowRunBlockingCol(columnMinWidth),
    PlayerAttributeColumn.highRunBlockingCol(columnMinWidth),
    PlayerAttributeColumn.lowPassBlockingCol(columnMinWidth),
    PlayerAttributeColumn.highPassBlockingCol(columnMinWidth),
    PlayerAttributeColumn.lowBlockStrengthCol(columnMinWidth),
    PlayerAttributeColumn.highBlockStrengthCol(columnMinWidth),
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
    PlayerAttributeColumn.lowRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.highRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.lowThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.highThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.lowEnduranceCol(columnMinWidth),
    PlayerAttributeColumn.highEnduranceCol(columnMinWidth)
];

export interface IFullbackTableProps {
    players: Array<IPlayer>;
}

export function FullbackTable(props: IFullbackTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [runBlockingValue, setRunBlockingValue] = useState("");
    const [passBlockingValue, setPassBlockingValue] = useState("");
    const [blockingStrengthValue, setBlockingStrengthValue] = useState("");
    const [powerInsideValue, setPowerInsideValue] = useState("");
    const [thirdDownRunsValue, setThirdDownRunsValue] = useState("");
    const [holeRecognitionValue, setHoleRecognitionValue] = useState("");
    const [blitzPickupValue, setBlitzPickupValue] = useState("");
    const [avoidDropsValue, setAvoidDropsValue] = useState("");
    const [routeRunningValue, setRouteRunningValue] = useState("");
    const [thirdDownReceivingValue, setThirdDownReceivingValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === "FB"
            && (checkLowValue ? player.lowRunBlocking >= (Number(runBlockingValue)) : player.highRunBlocking >= (Number(runBlockingValue)))
            && (checkLowValue ? player.lowPassBlocking >= (Number(passBlockingValue)) : player.highPassBlocking >= (Number(passBlockingValue)))
            && (checkLowValue ? player.lowBlockingStrength >= (Number(blockingStrengthValue)) : player.highPassBlocking >= (Number(blockingStrengthValue)))
            && (checkLowValue ? player.lowPowerInside >= (Number(powerInsideValue)) : player.highPowerInside >= (Number(powerInsideValue)))
            && (checkLowValue ? player.lowThirdDownRuns >= (Number(thirdDownRunsValue)) : player.highThirdDownRuns >= (Number(thirdDownRunsValue)))
            && (checkLowValue ? player.lowHoleRecognition >= (Number(holeRecognitionValue)) : player.lowHoleRecognition >= (Number(holeRecognitionValue)))
            && (checkLowValue ? player.lowBlitzPickup >= (Number(blitzPickupValue)) : player.highBlitzPickup >= (Number(blitzPickupValue)))
            && (checkLowValue ? player.lowAvoidDrops >= (Number(avoidDropsValue)) : player.highAvoidDrops >= (Number(avoidDropsValue)))
            && (checkLowValue ? player.lowRouteRunning >= (Number(routeRunningValue)) : player.highRouteRunning >= (Number(routeRunningValue)))
            && (checkLowValue ? player.lowThirdDownReceiving >= (Number(thirdDownReceivingValue)) : player.highThirdDownReceiving >= (Number(thirdDownReceivingValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setRunBlockingValue("");
        setPassBlockingValue("");
        setBlockingStrengthValue("");
        setPowerInsideValue("");
        setThirdDownRunsValue("");
        setHoleRecognitionValue("");
        setBlitzPickupValue("");
        setAvoidDropsValue("");
        setRouteRunningValue("");
        setThirdDownReceivingValue("");
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Run Blocking",
            value: runBlockingValue,
            setOnChange: setRunBlockingValue
        },
        {
            label: "Pass Blocking",
            value: passBlockingValue,
            setOnChange: setPassBlockingValue
        },
        {
            label: "Blocking Strength",
            value: blockingStrengthValue,
            setOnChange: setBlockingStrengthValue
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
        />
    );
}