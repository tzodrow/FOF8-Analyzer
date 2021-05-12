import { Dispatch } from "react";
import { IIconProps, PrimaryButton } from "@fluentui/react";
import { useDispatch } from "react-redux";
import { IPlayer } from "../../Models/IPlayer";
import { useAppSelector } from "../../Reducers/Hooks";
import { add, remove } from "../../Reducers/Slices/DraftSlice";

interface IDraftBoardButtonProps {
    player: IPlayer;
}

const onClick = (onDraftBoard: boolean, player: IPlayer, dispatch: Dispatch<any>) => {
    if (!onDraftBoard) {
        dispatch(add(player));
    } else {
        dispatch(remove(player));
    }
}

const addIcon: IIconProps = { iconName: 'Add' };
const removeIcon: IIconProps = { iconName: 'Remove' };

export function DraftBoardButton(props: IDraftBoardButtonProps) {
    const draftPlayers = useAppSelector(state => state.draft.players);
    const dispatch = useDispatch();
    

    const onDraftBoard = draftPlayers.some(p => p.playerId === props.player.playerId);
    const buttonColor = onDraftBoard ? "Red" : "Green";
    const iconProps = onDraftBoard ? removeIcon : addIcon;

    return (
        <PrimaryButton
            color={buttonColor}
            iconProps={iconProps}
            onClick={() => onClick(onDraftBoard, props.player, dispatch)}
        />
    );
}