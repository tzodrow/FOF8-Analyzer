import { Stack } from "@fluentui/react";
import { PlayerCard } from "../Common/Components/PlayerCard";
import { useAppSelector } from "../Reducers/Hooks";

export function TestPage() {
    const players = useAppSelector(state => state.players.players);
    const fewPlayers = players.slice(0, 10);

    return (
        <Stack wrap>
            {fewPlayers.map(p => <PlayerCard player={p} />)}
        </Stack>
    )
}