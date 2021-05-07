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
                    item.lowKickingPower
                    + item.lowKickingAccuracy
                    + item.lowKickoffDistance
                    + item.lowKickoffHangTime;
                value /= 4;
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
                    item.highKickingPower
                    + item.highKickingAccuracy
                    + item.highKickoffDistance
                    + item.highKickoffHangTime;
                value /= 4;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowKickingPowerCol(columnMinWidth),
    PlayerAttributeColumn.highKickingPowerCol(columnMinWidth),
    PlayerAttributeColumn.lowKickingAccuracyCol(columnMinWidth),
    PlayerAttributeColumn.highKickingAccuracyCol(columnMinWidth),
    PlayerAttributeColumn.lowKickoffDistanceCol(columnMinWidth),
    PlayerAttributeColumn.highKickoffDistanceCol(columnMinWidth),
    PlayerAttributeColumn.lowKickoffHangTimeCol(columnMinWidth),
    PlayerAttributeColumn.highKickoffHangTimeCol(columnMinWidth)
];

export interface IKickerTableProps {
    players: Array<IPlayer>;
}

export function KickerTable(props: IKickerTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [kickingPowerValue, setKickingPowerValue] = useState("");
    const [kickingAccuracyValue, setKickingAccuracyValue] = useState("");
    const [kickoffDistanceValue, setKickoffDistanceValue] = useState("");
    const [kickoffHangTimeValue, setKickoffHangTimeValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === "K"
            && (checkLowValue ? player.lowKickingPower >= (Number(kickingPowerValue)) : player.highKickingPower >= (Number(kickingPowerValue)))
            && (checkLowValue ? player.lowKickingAccuracy >= (Number(kickingAccuracyValue)) : player.highKickingAccuracy >= (Number(kickingAccuracyValue)))
            && (checkLowValue ? player.lowKickoffDistance >= (Number(kickoffDistanceValue)) : player.highKickoffDistance >= (Number(kickoffDistanceValue)))
            && (checkLowValue ? player.lowKickoffHangTime >= (Number(kickoffHangTimeValue)) : player.highKickoffHangTime >= (Number(kickoffHangTimeValue)));
    };

    const onClearFiltersClick = () => {
        setKickingPowerValue("");
        setKickingAccuracyValue("");
        setKickoffDistanceValue("");
        setKickoffHangTimeValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Kicking Power",
            value: kickingPowerValue,
            setOnChange: setKickingPowerValue
        },
        {
            label: "Kicking Accuracy",
            value: kickingAccuracyValue,
            setOnChange: setKickingAccuracyValue
        },
        {
            label: "Kickoff Distance",
            value: kickoffDistanceValue,
            setOnChange: setKickoffDistanceValue
        },
        {
            label: "Kickoff Hang Time",
            value: kickoffHangTimeValue,
            setOnChange: setKickoffHangTimeValue
        }
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