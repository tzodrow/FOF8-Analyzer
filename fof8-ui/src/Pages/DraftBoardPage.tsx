import { Link } from '@fluentui/react/lib/Link';
import {
    DetailsList,
    Selection,
    IColumn,
    buildColumns,
    IColumnReorderOptions,
    IDragDropEvents,
    IDragDropContext,
} from '@fluentui/react/lib/DetailsList';
import { MarqueeSelection } from '@fluentui/react/lib/MarqueeSelection';
import { getTheme, mergeStyles } from '@fluentui/react/lib/Styling';
import { IPlayer } from '../Models/IPlayer';
import { useAppSelector } from '../Reducers/Hooks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from '../Reducers/Slices/DraftSlice';

const theme = getTheme();
const dragEnterClass = mergeStyles({
    backgroundColor: theme.palette.neutralLight,
});

interface IDraftBoardPageProps {

}

export function DraftBoardPage(props: IDraftBoardPageProps) {
    const players = useAppSelector(state => state.draft.players);
    const dispatch = useDispatch();

    const [selection] = useState(new Selection());
    const [columns, setColumns] = useState(buildColumns(players, true));
    const [draggedItem, setDraggedItem] = useState({} as IPlayer);
    const [draggedIndex, setDraggedItemIndex] = useState(-1);

    const insertBeforeItem = (item: IPlayer): void => {
        const draggedItems: Array<IPlayer> = selection.isIndexSelected(draggedIndex)
            ? (selection.getSelection() as IPlayer[])
            : [draggedItem!];

        const insertIndex = players.indexOf(item);
        const filteredItems = players.filter(p => !draggedItems.some(itm => itm.playerId === p.playerId));

        filteredItems.splice(insertIndex, 0, ...draggedItems);

        dispatch(set(filteredItems));
    }

    const getDragDropEvents = (): IDragDropEvents => {
        return {
            canDrop: (dropContext?: IDragDropContext, dragContext?: IDragDropContext) => {
                return true;
            },
            canDrag: (item?: any) => {
                return true;
            },
            onDragEnter: (item?: any, event?: DragEvent) => {
                // return string is the css classes that will be added to the entering element.
                return dragEnterClass;
            },
            onDragLeave: (item?: any, event?: DragEvent) => {
                return;
            },
            onDrop: (item?: any, event?: DragEvent) => {
                if (draggedItem) {
                    insertBeforeItem(item);
                }
            },
            onDragStart: (item?: IPlayer, itemIndex?: number, selectedItems?: any[], event?: MouseEvent) => {
                setDraggedItem(item ? item : {} as IPlayer);
                setDraggedItemIndex(itemIndex ? itemIndex : -1);
            },
            onDragEnd: (item?: any, event?: DragEvent) => {
                setDraggedItem({} as IPlayer);
                setDraggedItemIndex(-1);
            },
        };
    }

    const handleColumnReorder = (draggedIndex: number, targetIndex: number) => {
        const draggedItems = columns[draggedIndex];
        const newColumns: IColumn[] = [...columns];

        // insert before the dropped item
        newColumns.splice(draggedIndex, 1);
        newColumns.splice(targetIndex, 0, draggedItems);
        setColumns(newColumns);
    };

    const getColumnReorderOptions = (): IColumnReorderOptions => {
        return {
            frozenColumnCountFromStart: parseInt("-1", 10),
            frozenColumnCountFromEnd: parseInt("0", 10),
            handleColumnReorder: handleColumnReorder,
        };
    }

    const onItemInvoked = (item: IPlayer): void => {
        alert(`Item invoked: ${item.firstName}`);
    };

    const onRenderItemColumn = (item?: IPlayer, index?: number, column?: IColumn): JSX.Element | string => {
        const key = column?.key ? column.key as keyof IPlayer : "";
        if (key === 'firstName') {
            return <Link data-selection-invoke={true}>{item ? item[key] : ""}</Link>;
        }

        return String(item ? item[key] : "");
    };

    return (
        <div>
            <MarqueeSelection selection={selection}>
                <DetailsList
                    setKey="items"
                    items={players}
                    columns={columns}
                    selection={selection}
                    selectionPreservedOnEmptyClick={true}
                    onItemInvoked={onItemInvoked}
                    onRenderItemColumn={onRenderItemColumn}
                    dragDropEvents={getDragDropEvents()}
                    columnReorderOptions={getColumnReorderOptions()}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    checkButtonAriaLabel="select row"
                />
            </MarqueeSelection>
        </div>
    );
}
