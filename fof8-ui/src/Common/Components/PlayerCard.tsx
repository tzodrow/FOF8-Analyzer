import { DocumentCard, HoverCard, IExpandingCardProps, mergeStyleSets, Slider, TextField } from "@fluentui/react";
import { IPlayer } from "../../Models/IPlayer";

const classNames = mergeStyleSets({
    compactCard: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    expandedCard: {
        padding: '16px 24px',
    },
    item: {
        selectors: {
            '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer',
            },
        },
    },
});

const onRenderCompactCard = (item: IPlayer): JSX.Element => {
    return (
        <div className={classNames.compactCard}>
            <a href={`http://wikipedia.org/wiki`}>
                {item.position} - {item.grade / 10.0}
            </a>
        </div>
    );
};

const onRenderExpandedCard = (item: IPlayer): JSX.Element => {
    return (
        <div className={classNames.expandedCard}>
            <TextField label={"Solecismic"} value={item.solecismic.toString()} />
            <TextField label={"Dash"} value={item.dash.toString()} />
            <TextField label={"Strength"} value={item.strength.toString()} />
        </div>
    );
};

interface IPlayerCardProps {
    player: IPlayer;
}

export function PlayerCard(props: IPlayerCardProps) {
    const expandingCardProps: IExpandingCardProps = {
        onRenderCompactCard: onRenderCompactCard,
        onRenderExpandedCard: onRenderExpandedCard,
        renderData: props.player,
    };

    console.log(props.player.lowAccuracy);
    console.log(props.player.highAccuracy);

    return (
        <DocumentCard>
            <HoverCard expandingCardProps={expandingCardProps} instantOpenOnClick={true}>
                <div className={classNames.item}>{props.player.firstName} {props.player.lastName}</div>
            </HoverCard>
            <Slider
                ranged
                min={0}
                max={100}
                lowerValue={props.player.lowAccuracy}
                value={props.player.highAccuracy}
                label={"Accuracy"}
            />
            <Slider
                ranged
                min={0}
                max={100}
                lowerValue={props.player.lowBlitzPickup}
                value={props.player.highBlitzPickup}
                label={"Blitz Pickup"}
            />
            <Slider
                ranged
                min={0}
                max={100}
                lowerValue={props.player.lowPassBlocking}
                value={props.player.highPassBlocking}
                label={"Pass Blocking"}
            />
            <Slider
                ranged
                min={0}
                max={100}
                lowerValue={props.player.lowRunDefense}
                value={props.player.highRunDefense}
                label={"Run Defense"}
            />
            <Slider
                ranged
                min={0}
                max={100}
                lowerValue={props.player.lowEndurance}
                value={props.player.highEndurance}
                label={"Endurance"}
            />
        </DocumentCard>
    );
}