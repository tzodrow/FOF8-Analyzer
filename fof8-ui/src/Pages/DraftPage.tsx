import { Pivot, PivotItem } from "@fluentui/react";
import { FullbackTable } from "../PlayerTables/FullbackTable";
import { OffensiveLineTable } from "../PlayerTables/OffensiveLineTable";
import { QuarterbackTable } from "../PlayerTables/QuarterbackTable";
import { RunningbackTable } from "../PlayerTables/RunningbackTable";
import { TightendTable } from "../PlayerTables/TightendPlayerTable";
import { WideReceiverTable } from "../PlayerTables/WideReceiverTable";
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
            <PivotItem
                headerText="FB"
            >
                <FullbackTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="TE"
            >
                <TightendTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="WR"
            >
                <WideReceiverTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="C"
            >
                <OffensiveLineTable
                    players={players}
                    playerPositionGroup={"C"}
                />
            </PivotItem>
            <PivotItem
                headerText="G"
            >
                <OffensiveLineTable
                    players={players}
                    playerPositionGroup={"G"}
                />
            </PivotItem>
            <PivotItem
                headerText="T"
            >
                <OffensiveLineTable
                    players={players}
                    playerPositionGroup={"T"}
                />
            </PivotItem>
        </Pivot>
    );
}