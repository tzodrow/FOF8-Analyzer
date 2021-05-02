import { Pivot, PivotItem } from "@fluentui/react";
import { QuarterbackTable } from "../PlayerTables/QuarterbackTable";
import { RunningbackTable } from "../PlayerTables/RunningbackTable";
import { useAppSelector } from "../Reducers/Hooks";

type Props = {
}

export default function DraftPage(props: Props) {
    const players = useAppSelector(state => state.players.players);

    return (
        <Pivot>
            <PivotItem
                headerText="QB"
            >
                <QuarterbackTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="RB"
            >
                <RunningbackTable
                    players={players}
                />
            </PivotItem>
        </Pivot>
    );
}