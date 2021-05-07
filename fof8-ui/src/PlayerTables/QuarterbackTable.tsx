import { IColumn } from '@fluentui/react';
import { useState } from 'react';
import { IPlayerAttributeTextFieldProps } from '../Common/Components/PlayerAttributeTextField';
import { IPlayer, IQuarterbackPlayer } from '../Models/IPlayer';
import { BasePlayerTable } from './BasePlayerTable';

const columnMinWidth = 45;
const columns: Array<IColumn> = [
    {
        key: 'avgLow',
        name: 'AvgL',
        fieldName: 'avgLow',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        onRender: (item?: IQuarterbackPlayer) => {
            let value = 0;
            if (item) {
                value = item.lowAccuracy + item.lowDeepPasses + item.lowLongPasses + item.lowMediumPasses + item.lowReadDefense + item.lowRunFrequency + item.lowScreenPasses + item.lowSenseRush + item.lowShortPasses + item.lowThirdDown + item.lowTiming + item.lowTwoMinuteOffense;
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
                value = item.highAccuracy + item.highDeepPasses + item.highLongPasses + item.highMediumPasses + item.highReadDefense + item.highRunFrequency + item.highScreenPasses + item.highSenseRush + item.highShortPasses + item.highThirdDown + item.highTiming + item.highTwoMinuteOffense;
                value /= 12;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average High Rating"
    },
    {
        key: 'lowScreenPasses',
        name: 'LScP',
        fieldName: 'lowScreenPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Screen Passes"
    },
    {
        key: 'highScreenPasses',
        name: 'HScP',
        fieldName: 'highScreenPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Screen Passes"
    },
    {
        key: 'lowShortPasses',
        name: 'LShP',
        fieldName: 'lowShortPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Short Passes"
    },
    {
        key: 'highShortPasses',
        name: 'HShP',
        fieldName: 'highShortPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Short Passes"
    },
    {
        key: 'lowMediumPasses',
        name: 'LMP',
        fieldName: 'lowMediumPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Medium Passes"
    },
    {
        key: 'highMediumPasses',
        name: 'HMP',
        fieldName: 'highMediumPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Medium Passes"
    },
    {
        key: 'lowLongPasses',
        name: 'LLP',
        fieldName: 'lowLongPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Long Passes"
    },
    {
        key: 'highLongPasses',
        name: 'HLP',
        fieldName: 'highLongPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Long Passes"
    },
    {
        key: 'lowDeepPasses',
        name: 'LDP',
        fieldName: 'lowDeepPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Deep Passes"
    },
    {
        key: 'highDeepPasses',
        name: 'HDP',
        fieldName: 'highDeepPasses',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Deep Passes"
    },
    {
        key: 'lowAccuracy',
        name: 'LA',
        fieldName: 'lowAccuracy',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Accuracy"
    },
    {
        key: 'highAccuracy',
        name: 'HA',
        fieldName: 'highAccuracy',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Accuracy"
    },
    {
        key: 'lowTiming',
        name: 'LT',
        fieldName: 'lowTiming',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Timing"
    },
    {
        key: 'highTiming',
        name: 'HT',
        fieldName: 'highTiming',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Timing"
    },
    {
        key: 'lowThirdDown',
        name: 'LThD',
        fieldName: 'lowThirdDown',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Third Down"
    },
    {
        key: 'highThirdDown',
        name: 'HThD',
        fieldName: 'highThirdDown',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Third Down"
    },
    {
        key: 'lowTwoMinuteOffense',
        name: 'LTMO',
        fieldName: 'lowTwoMinuteOffense',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Two Minute Offense"
    },
    {
        key: 'highTwoMinuteOffense',
        name: 'HTMO',
        fieldName: 'highTwoMinuteOffense',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Two Minute Offense"
    },
    {
        key: 'lowSenseRush',
        name: 'LSR',
        fieldName: 'lowSenseRush',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Low Sense Rush"
    },
    {
        key: 'highSenseRush',
        name: 'HSR',
        fieldName: 'highSenseRush',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "High Sense Rush"
    }
];

export interface IQuarterbackTableProps {
    players: Array<IPlayer>;
}

export function QuarterbackTable(props: IQuarterbackTableProps) {
    const [checkLowValue, setCheckLowValue] = useState(true);
    const [screenPassValue, setScreenPassValue] = useState("");
    const [shortPassValue, setShortPassValue] = useState("");
    const [mediumPassValue, setMediumPassValue] = useState("");
    const [longPassValue, setLongPassValue] = useState("");
    const [deepPassValue, setDeepPassValue] = useState("");
    const [accuracyValue, setAccuracyValue] = useState("");
    const [timingValue, setTimingValue] = useState("");
    const [thirdDownValue, setThirdDownValue] = useState("");
    const [twoMinuteOffenseValue, setTwoMinuteOffenseValue] = useState("");
    const [senseRushValue, setSenseRushValue] = useState("");

    const quarterbackFilter = (player: IPlayer) => {
        return player.positionGroup === "QB"
            && (checkLowValue ? player.lowScreenPasses >= (Number(screenPassValue)) : player.highScreenPasses >= (Number(screenPassValue)))
            && (checkLowValue ? player.lowShortPasses >= (Number(shortPassValue)) : player.highShortPasses >= (Number(shortPassValue)))
            && (checkLowValue ? player.lowMediumPasses >= (Number(mediumPassValue)) : player.highMediumPasses >= (Number(mediumPassValue)))
            && (checkLowValue ? player.lowLongPasses >= (Number(longPassValue)) : player.highLongPasses >= (Number(longPassValue)))
            && (checkLowValue ? player.lowLongPasses >= (Number(deepPassValue)) : player.highLongPasses >= (Number(deepPassValue)))
            && (checkLowValue ? player.lowDeepPasses >= (Number(accuracyValue)) : player.highDeepPasses >= (Number(accuracyValue)))
            && (checkLowValue ? player.lowTiming >= (Number(timingValue)) : player.highTiming >= (Number(timingValue)))
            && (checkLowValue ? player.lowThirdDown >= (Number(thirdDownValue)) : player.highThirdDown >= (Number(thirdDownValue)))
            && (checkLowValue ? player.lowTwoMinuteOffense >= (Number(twoMinuteOffenseValue)) : player.highTwoMinuteOffense >= (Number(twoMinuteOffenseValue)))
            && (checkLowValue ? player.lowSenseRush >= (Number(senseRushValue)) : player.highSenseRush >= (Number(senseRushValue)));
    };

    const onClearFiltersClick = () => {
        setScreenPassValue("");
        setShortPassValue("");
        setMediumPassValue("");
        setLongPassValue("");
        setDeepPassValue("");
        setAccuracyValue("");
        setTimingValue("");
        setThirdDownValue("");
        setTwoMinuteOffenseValue("");
        setSenseRushValue("");
    }

    const playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps> = [
        {
            label: "Screen Passes",
            value: screenPassValue,
            setOnChange: setScreenPassValue
        },
        {
            label: "Short Passes",
            value: shortPassValue,
            setOnChange: setShortPassValue
        },
        {
            label: "Medium Passes",
            value: mediumPassValue,
            setOnChange: setMediumPassValue
        },
        {
            label: "Long Passes",
            value: longPassValue,
            setOnChange: setLongPassValue
        },
        {
            label: "Deep Passes",
            value: deepPassValue,
            setOnChange: setDeepPassValue
        },
        {
            label: "Accuracy",
            value: accuracyValue,
            setOnChange: setAccuracyValue
        },
        {
            label: "Timing",
            value: timingValue,
            setOnChange: setTimingValue
        },
        {
            label: "Third Down Passing",
            value: thirdDownValue,
            setOnChange: setThirdDownValue
        },
        {
            label: "Two Minute Offense",
            value: twoMinuteOffenseValue,
            setOnChange: setTwoMinuteOffenseValue
        },
        {
            label: "Sense Rush",
            value: senseRushValue,
            setOnChange: setSenseRushValue
        }
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
            attributes={[]}
            selectedAttributes={[]}
            setAttributes={() => console.log("Called")}
        />
    );
}