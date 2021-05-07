import { Pivot, PivotItem } from "@fluentui/react";
import { DefensiveBackTable } from "../PlayerTables/DefensiveBackTable";
import { DefensiveFrontTable } from "../PlayerTables/DefensiveFrontTable";
import { FullbackTable } from "../PlayerTables/FullbackTable";
import { KickerTable } from "../PlayerTables/KickerTable";
import { OffensiveLineTable } from "../PlayerTables/OffensiveLineTable";
import { PunterTable } from "../PlayerTables/PunterTable";
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
            <PivotItem
                headerText="K"
            >
                <KickerTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="P"
            >
                <PunterTable
                    players={players}
                />
            </PivotItem>
            <PivotItem
                headerText="DE"
            >
                <DefensiveFrontTable
                    players={players}
                    playerPositionGroup={"DE"}
                />
            </PivotItem>
            <PivotItem
                headerText="DT"
            >
                <DefensiveFrontTable
                    players={players}
                    playerPositionGroup={"DT"}
                />
            </PivotItem>
            <PivotItem
                headerText="ILB"
            >
                <DefensiveFrontTable
                    players={players}
                    playerPositionGroup={"ILB"}
                />
            </PivotItem>
            <PivotItem
                headerText="OLB"
            >
                <DefensiveFrontTable
                    players={players}
                    playerPositionGroup={"OLB"}
                />
            </PivotItem>
            <PivotItem
                headerText="CB"
            >
                <DefensiveBackTable
                    players={players}
                    playerPositionGroup={"CB"}
                />
            </PivotItem>
            <PivotItem
                headerText="S"
            >
                <DefensiveBackTable
                    players={players}
                    playerPositionGroup={"S"}
                />
            </PivotItem>
        </Pivot>
    );
}