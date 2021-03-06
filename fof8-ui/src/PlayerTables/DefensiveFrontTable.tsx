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
                    item.lowRunDefense
                    + item.lowPassRushStrength
                    + item.lowPassRushTechnique
                    + item.lowMantoManDefense
                    + item.lowZoneDefense
                    + item.lowBumpandRunDefense
                    + item.lowPlayDiagnosis
                    + item.lowPunishingHitter
                    + item.lowEndurance;
                value /= 9;
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
                    item.highRunDefense
                    + item.highPassRushStrength
                    + item.highPassRushTechnique
                    + item.highMantoManDefense
                    + item.highZoneDefense
                    + item.highBumpandRunDefense
                    + item.highPlayDiagnosis
                    + item.highPunishingHitter
                    + item.highEndurance;
                value /= 9;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    PlayerAttributeColumn.lowRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.highRunDefenseCol(columnMinWidth),
    PlayerAttributeColumn.lowPassRushStrengthCol(columnMinWidth),
    PlayerAttributeColumn.highPassRushStrengthCol(columnMinWidth),
    PlayerAttributeColumn.lowPassRushTechniqueCol(columnMinWidth),
    PlayerAttributeColumn.highPassRushTechniqueCol(columnMinWidth),
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
    PlayerAttributeColumn.lowEnduranceCol(columnMinWidth),
    PlayerAttributeColumn.highEnduranceCol(columnMinWidth)
];

export interface IDefensiveFrontTableProps {
    players: Array<IPlayer>;
    playerPositionGroup: string;
}

export function DefensiveFrontTable(props: IDefensiveFrontTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [runDefenseValue, setRunDefenseValue] = useState("");
    const [passRushStrengthValue, setPassRushStrengthValue] = useState("");
    const [passRushTechniqueValue, setPassRushTechniqueValue] = useState("");
    const [manToManDefenseValue, setManToManDefenseValue] = useState("");
    const [zoneDefenseValue, setZoneDefenseValue] = useState("");
    const [bumpAndRunDefenseValue, setBumpAndRunDefenseValue] = useState("");
    const [playDiagnosisValue, setPlayDiagnosisValue] = useState("");
    const [punishingHitterValue, setPunishingHitterValue] = useState("");
    const [enduranceValue, setEnduranceValue] = useState("");

    const filter = (player: IPlayer) => {
        return player.positionGroup === props.playerPositionGroup
            && (checkLowValue ? player.lowRunDefense >= (Number(runDefenseValue)) : player.highRunDefense >= (Number(runDefenseValue)))
            && (checkLowValue ? player.lowPassRushStrength >= (Number(passRushStrengthValue)) : player.highPassRushStrength >= (Number(passRushStrengthValue)))
            && (checkLowValue ? player.lowPassRushTechnique >= (Number(passRushTechniqueValue)) : player.highPassRushTechnique >= (Number(passRushTechniqueValue)))
            && (checkLowValue ? player.lowMantoManDefense >= (Number(manToManDefenseValue)) : player.highMantoManDefense >= (Number(manToManDefenseValue)))
            && (checkLowValue ? player.lowZoneDefense >= (Number(zoneDefenseValue)) : player.highZoneDefense >= (Number(zoneDefenseValue)))
            && (checkLowValue ? player.lowBumpandRunDefense >= (Number(bumpAndRunDefenseValue)) : player.highBumpandRunDefense >= (Number(bumpAndRunDefenseValue)))
            && (checkLowValue ? player.lowPlayDiagnosis >= (Number(playDiagnosisValue)) : player.highPlayDiagnosis >= (Number(playDiagnosisValue)))
            && (checkLowValue ? player.lowPunishingHitter >= (Number(punishingHitterValue)) : player.highPunishingHitter >= (Number(punishingHitterValue)))
            && (checkLowValue ? player.lowEndurance >= (Number(enduranceValue)) : player.highEndurance >= (Number(enduranceValue)));
    };

    const onClearFiltersClick = () => {
        setRunDefenseValue("");
        setPassRushStrengthValue("");
        setPassRushTechniqueValue("");
        setManToManDefenseValue("");
        setZoneDefenseValue("");
        setBumpAndRunDefenseValue("");
        setPlayDiagnosisValue("");
        setPunishingHitterValue("");
        setEnduranceValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Run Defense",
            value: runDefenseValue,
            setOnChange: setRunDefenseValue
        },
        {
            label: "Pass Rush Strength",
            value: passRushStrengthValue,
            setOnChange: setPassRushStrengthValue
        },
        {
            label: "Pass Rush Technique",
            value: passRushTechniqueValue,
            setOnChange: setPassRushTechniqueValue
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