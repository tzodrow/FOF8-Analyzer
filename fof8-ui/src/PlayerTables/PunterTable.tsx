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
                    item.lowPuntingPower
                    + item.lowHangTime
                    + item.lowDirectionalPunting;
                value /= 3;
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
                    item.highPuntingPower
                    + item.highHangTime
                    + item.highDirectionalPunting;
                value /= 3;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowPuntingPowerCol(columnMinWidth),
    PlayerAttributeColumn.highPuntingPowerCol(columnMinWidth),
    PlayerAttributeColumn.lowHangTimeCol(columnMinWidth),
    PlayerAttributeColumn.highHangTimeCol(columnMinWidth),
    PlayerAttributeColumn.lowDirectionalPunting(columnMinWidth),
    PlayerAttributeColumn.highDirectionalPunting(columnMinWidth)
];

export interface IPunterTableProps {
    players: Array<IPlayer>;
}

export function PunterTable(props: IPunterTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [puntingPowerValue, setPuntingPowerValue] = useState("");
    const [hangTimeValue, setHangTimeValue] = useState("");
    const [directionalPuntingValue, setDirectionalPuntingValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === "P"
            && (checkLowValue ? player.lowPuntingPower >= (Number(puntingPowerValue)) : player.highPuntingPower >= (Number(puntingPowerValue)))
            && (checkLowValue ? player.lowHangTime >= (Number(hangTimeValue)) : player.highHangTime >= (Number(hangTimeValue)))
            && (checkLowValue ? player.lowDirectionalPunting >= (Number(directionalPuntingValue)) : player.highDirectionalPunting >= (Number(directionalPuntingValue)));
    };

    const onClearFiltersClick = () => {
        setPuntingPowerValue("");
        setHangTimeValue("");
        setDirectionalPuntingValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Punting Power",
            value: puntingPowerValue,
            setOnChange: setPuntingPowerValue
        },
        {
            label: "Hang Time",
            value: hangTimeValue,
            setOnChange: setHangTimeValue
        },
        {
            label: "Directional Punting",
            value: directionalPuntingValue,
            setOnChange: setDirectionalPuntingValue
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
            attributes={[]}
            selectedAttributes={[]}
            setAttributes={() => console.log("Called")}
        />
    );
}