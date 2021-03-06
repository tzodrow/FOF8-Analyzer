import { IColumn } from '@fluentui/react';
import { useState } from 'react';
import { IPlayerAttributeTextFieldProps } from '../Common/Components/PlayerAttributeTextField';
import { PlayerAttributeColumn } from '../Common/Definitions/PlayerAttributeColumns';
import { Attribute } from '../Enums/Attributes';
import { IPlayer } from '../Models/IPlayer';
import { BasePlayerTable } from './BasePlayerTable';

const columnMinWidth = 45;
const columns: Array<IColumn> = [
    PlayerAttributeColumn.lowRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.highRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.lowMantoManDefenseCol(columnMinWidth),
    PlayerAttributeColumn.highMantoManDefenseCol(columnMinWidth),
    PlayerAttributeColumn.lowZoneDefenseCol(columnMinWidth),
    PlayerAttributeColumn.highZoneDefenseCol(columnMinWidth),
    PlayerAttributeColumn.lowBumpandRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.highBumpandRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.lowPlayDiagnosisCol(columnMinWidth),
    PlayerAttributeColumn.highPlayDiagnosisCol(columnMinWidth),
    PlayerAttributeColumn.lowPunishingHitterCol(columnMinWidth),
    PlayerAttributeColumn.highPunishingHitterCol(columnMinWidth),
    PlayerAttributeColumn.lowInterceptingCol(columnMinWidth),
    PlayerAttributeColumn.highInterceptingCol(columnMinWidth),
    PlayerAttributeColumn.lowEnduranceCol(columnMinWidth),
    PlayerAttributeColumn.highEnduranceCol(columnMinWidth)
];

const defensiveBackAttributes = [
    Attribute.BumpandRunDefense,
    Attribute.Endurance,
    Attribute.Intercepting,
    Attribute.MantoManDefense,
    Attribute.PlayDiagnosis,
    Attribute.PunishingHitter,
    Attribute.RunDefense,
    Attribute.ZoneDefense
]

export interface IDefensiveBackTableProps {
    players: Array<IPlayer>;
    playerPositionGroup: string;
}

export function DefensiveBackTable(props: IDefensiveBackTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [runDefenseValue, setRunDefenseValue] = useState("");
    const [manToManDefenseValue, setManToManDefenseValue] = useState("");
    const [zoneDefenseValue, setZoneDefenseValue] = useState("");
    const [bumpAndRunDefenseValue, setBumpAndRunDefenseValue] = useState("");
    const [playDiagnosisValue, setPlayDiagnosisValue] = useState("");
    const [punishingHitterValue, setPunishingHitterValue] = useState("");
    const [interceptingValue, setInterceptingValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");
    const [avgAttributes, setAvgAttributes] = useState(defensiveBackAttributes);

    const filter = (player: IPlayer) => {
        return player.positionGroup === props.playerPositionGroup
            && (checkLowValue ? player.lowRunDefense >= (Number(runDefenseValue)) : player.highRunDefense >= (Number(runDefenseValue)))
            && (checkLowValue ? player.lowMantoManDefense >= (Number(manToManDefenseValue)) : player.highMantoManDefense >= (Number(manToManDefenseValue)))
            && (checkLowValue ? player.lowZoneDefense >= (Number(zoneDefenseValue)) : player.highZoneDefense >= (Number(zoneDefenseValue)))
            && (checkLowValue ? player.lowBumpandRunDefense >= (Number(bumpAndRunDefenseValue)) : player.highBumpandRunDefense >= (Number(bumpAndRunDefenseValue)))
            && (checkLowValue ? player.lowPlayDiagnosis >= (Number(playDiagnosisValue)) : player.highPlayDiagnosis >= (Number(playDiagnosisValue)))
            && (checkLowValue ? player.lowPunishingHitter >= (Number(punishingHitterValue)) : player.highPunishingHitter >= (Number(punishingHitterValue)))
            && (checkLowValue ? player.lowIntercepting >= (Number(interceptingValue)) : player.highIntercepting >= (Number(interceptingValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setRunDefenseValue("");
        setManToManDefenseValue("");
        setZoneDefenseValue("");
        setBumpAndRunDefenseValue("");
        setPlayDiagnosisValue("");
        setPunishingHitterValue("");
        setInterceptingValue("");
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Run Defense",
            value: runDefenseValue,
            setOnChange: setRunDefenseValue
        },
        {
            label: "Man to Man Defense",
            value: manToManDefenseValue,
            setOnChange: setManToManDefenseValue
        },
        {
            label: "Zone Defense",
            value: zoneDefenseValue,
            setOnChange: setZoneDefenseValue
        },
        {
            label: "Bump and Run Defense",
            value: bumpAndRunDefenseValue,
            setOnChange: setBumpAndRunDefenseValue
        },
        {
            label: "Play Diagnosis",
            value: playDiagnosisValue,
            setOnChange: setPlayDiagnosisValue
        },
        {
            label: "Punishing Hitter",
            value: punishingHitterValue,
            setOnChange: setPunishingHitterValue
        },
        {
            label: "Intercepting",
            value: interceptingValue,
            setOnChange: setInterceptingValue
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
            attributes={defensiveBackAttributes}
            selectedAttributes={avgAttributes}
            setAttributes={setAvgAttributes}
        />
    );
}