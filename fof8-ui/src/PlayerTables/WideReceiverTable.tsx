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
                    item.lowAvoidDrops 
                    + item.lowGetDownfield 
                    + item.lowRouteRunning 
                    + item.lowThirdDownReceiving 
                    + item.lowBigPlayReceiving
                    + item.lowCourage
                    + item.lowAdjusttoBall
                    + item.lowEndurance;
                value /= 8;
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
                    item.highAvoidDrops 
                    + item.highGetDownfield 
                    + item.highRouteRunning 
                    + item.highThirdDownReceiving 
                    + item.highBigPlayReceiving
                    + item.highCourage
                    + item.lowAdjusttoBall
                    + item.highEndurance;
                value /= 8;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowAvoidDropsCol(columnMinWidth),
    PlayerAttributeColumn.highAvoidDropsCol(columnMinWidth),
    PlayerAttributeColumn.lowGetDownFieldCol(columnMinWidth),
    PlayerAttributeColumn.highGetDownField(columnMinWidth),
    PlayerAttributeColumn.lowRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.highRouteRunningCol(columnMinWidth),
    PlayerAttributeColumn.lowThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.highThirdDownReceivingCol(columnMinWidth),
    PlayerAttributeColumn.lowBigPlayReceivingCol(columnMinWidth),
    PlayerAttributeColumn.highBigPlayReceivingCol(columnMinWidth),
    PlayerAttributeColumn.lowCourageCol(columnMinWidth),
    PlayerAttributeColumn.highCourageCol(columnMinWidth),
    PlayerAttributeColumn.lowAdjustToBallCol(columnMinWidth),
    PlayerAttributeColumn.highAdjustToBallCol(columnMinWidth),
    PlayerAttributeColumn.lowEnduranceCol(columnMinWidth),
    PlayerAttributeColumn.highEnduranceCol(columnMinWidth)
];

export interface IWideReceiverTableProps {
    players: Array<IPlayer>;
}

export function WideReceiverTable(props: IWideReceiverTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [avoidDropsValue, setAvoidDropsValue] = useState("");
    const [getDownfieldValue, setGetDownfieldValue] = useState("");
    const [routeRunningValue, setRouteRunningValue] = useState("");
    const [thirdDownReceivingValue, setThirdDownReceivingValue] = useState("");
    const [bigPlayReceivingValue, setBigPlayReceivingValue] = useState("");
    const [courageValue, setCourageValue] = useState("");
    const [adjustToBallValue, setAdjustToBallValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === "WR"
            && (checkLowValue ? player.lowAvoidDrops >= (Number(avoidDropsValue)) : player.highAvoidDrops >= (Number(avoidDropsValue)))
            && (checkLowValue ? player.lowGetDownfield >= (Number(getDownfieldValue)) : player.highGetDownfield >= (Number(getDownfieldValue)))
            && (checkLowValue ? player.lowRouteRunning >= (Number(routeRunningValue)) : player.highRouteRunning >= (Number(routeRunningValue)))
            && (checkLowValue ? player.lowThirdDownReceiving >= (Number(thirdDownReceivingValue)) : player.highThirdDownReceiving >= (Number(thirdDownReceivingValue)))
            && (checkLowValue ? player.lowBigPlayReceiving >= (Number(bigPlayReceivingValue)) : player.highBigPlayReceiving >= (Number(bigPlayReceivingValue)))
            && (checkLowValue ? player.lowCourage >= (Number(courageValue)) : player.highCourage >= (Number(courageValue)))
            && (checkLowValue ? player.lowAdjusttoBall >= (Number(adjustToBallValue)) : player.highAdjusttoBall >= (Number(adjustToBallValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setAvoidDropsValue("");
        setGetDownfieldValue("");
        setRouteRunningValue("");
        setThirdDownReceivingValue("");
        setBigPlayReceivingValue("");
        setCourageValue("");
        setAdjustToBallValue("");
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
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
            label: "Big Play Receiving",
            value: bigPlayReceivingValue,
            setOnChange: setBigPlayReceivingValue
        },
        {
            label: "Courage",
            value: courageValue,
            setOnChange: setCourageValue
        },
        {
            label: "Adjust to Ball",
            value: adjustToBallValue,
            setOnChange: setAdjustToBallValue
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