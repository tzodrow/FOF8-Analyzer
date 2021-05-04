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
                    item.highKickingPower
                    + item.highHangTime
                    + item.highDirectionalPunting;
                value /= 3;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowKickingPowerCol(columnMinWidth),
    PlayerAttributeColumn.highKickingPowerCol(columnMinWidth),
    PlayerAttributeColumn.lowHangTimeCol(columnMinWidth),
    PlayerAttributeColumn.highHangTimeCol(columnMinWidth),
];

export interface IOffensiveLineTableProps {
    players: Array<IPlayer>;
    playerPositionGroup: string;
}

export function OffensiveLineTable(props: IOffensiveLineTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [runBlockingValue, setRunBlockingValue] = useState("");
    const [passBlockingValue, setPassBlockingValue] = useState("");
    const [blockingStrengthValue, setBlockingStrengthValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === props.playerPositionGroup
            && (checkLowValue ? player.lowRunBlocking >= (Number(runBlockingValue)) : player.highRunBlocking >= (Number(runBlockingValue)))
            && (checkLowValue ? player.lowPassBlocking >= (Number(passBlockingValue)) : player.highPassBlocking >= (Number(passBlockingValue)))
            && (checkLowValue ? player.lowBlockingStrength >= (Number(blockingStrengthValue)) : player.highPassBlocking >= (Number(blockingStrengthValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setRunBlockingValue("");
        setPassBlockingValue("");
        setBlockingStrengthValue("");
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