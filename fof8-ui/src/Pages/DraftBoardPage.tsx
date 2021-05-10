import * as React from 'react';
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
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Toggle, IToggleStyles } from '@fluentui/react/lib/Toggle';
import { getTheme, mergeStyles } from '@fluentui/react/lib/Styling';
import { IPlayer } from '../Models/IPlayer';
import { useAppSelector } from '../Reducers/Hooks';
import { useState } from 'react';

const theme = getTheme();
const margin = '0 30px 20px 0';
const dragEnterClass = mergeStyles({
    backgroundColor: theme.palette.neutralLight,
});
const controlWrapperClass = mergeStyles({
    display: 'flex',
    flexWrap: 'wrap',
});
const textFieldStyles: Partial<ITextFieldStyles> = {
    root: { margin: margin },
    fieldGroup: { maxWidth: '100px' },
};
const togglesStyles: Partial<IToggleStyles> = { root: { margin } };

export interface IDetailsListDragDropExampleState {
    items: IPlayer[];
    columns: IColumn[];
    isColumnReorderEnabled: boolean;
    frozenColumnCountFromStart: string;
    frozenColumnCountFromEnd: string;
}

interface IDraftBoardPageProps {

}

export function DraftBoardPage(props: IDraftBoardPageProps) {
    const items = useAppSelector(state => state.draft.players);

    const [players, setPlayers] = useState(items);
    const [selection, setSelection] = useState(new Selection());
    const [columns, setColumns] = useState(buildColumns(items, true));
    const [isColumnReorderEnabled, setIsColumnReorderEnabled] = useState(true);
    const [draggedItem, setDraggedItem] = useState({} as IPlayer);
    const [draggedIndex, setDraggedItemIndex] = useState(-1);
    const [frozenColumnCountFromStart, setFrozenColumnCountFromStart] = useState("-1");
    const [frozenColumnCountFromEnd, setFrozenColumnCountFromEnd] = useState("0");

    console.log(items);
    console.log(players);
    console.log(columns);

    const insertBeforeItem = (item: IPlayer): void => {
        const draggedItems: Array<IPlayer> = selection.isIndexSelected(draggedIndex)
            ? (selection.getSelection() as IPlayer[])
            : [draggedItem!];

        const insertIndex = players.indexOf(item);
        const filteredItems = players.filter(itm => draggedItems.indexOf(itm) === -1);

        filteredItems.splice(insertIndex, 0, ...draggedItems);

        setPlayers(filteredItems);
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
            onDragStart: (item?: any, itemIndex?: number, selectedItems?: any[], event?: MouseEvent) => {
                setDraggedItem(item);
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
            frozenColumnCountFromStart: parseInt(frozenColumnCountFromStart, 10),
            frozenColumnCountFromEnd: parseInt(frozenColumnCountFromEnd, 10),
            handleColumnReorder: handleColumnReorder,
        };
    }

    const validateNumber = (value: string): string => {
        return isNaN(Number(value)) ? `The value should be a number, actual is ${value}.` : '';
    }

    const onChangeStartCountText = (
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        text?: string,
    ): void => {
        setFrozenColumnCountFromStart(text ? text : "");
    };

    const onChangeEndCountText = (
        event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
        text?: string,
    ): void => {
        setFrozenColumnCountFromEnd(text ? text : "");
    };

    const onChangeColumnReorderEnabled = (ev: React.MouseEvent<HTMLElement>, checked?: boolean): void => {
        setIsColumnReorderEnabled(checked ? true : false);
    };

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
            <div className={controlWrapperClass}>
                <Toggle
                    label="Enable column reorder"
                    checked={isColumnReorderEnabled}
                    onChange={onChangeColumnReorderEnabled}
                    onText="Enabled"
                    offText="Disabled"
                    styles={togglesStyles}
                />
                <TextField
                    label="Number of left frozen columns"
                    onGetErrorMessage={validateNumber}
                    value={frozenColumnCountFromStart}
                    onChange={onChangeStartCountText}
                    styles={textFieldStyles}
                />
                <TextField
                    label="Number of right frozen columns"
                    onGetErrorMessage={validateNumber}
                    value={frozenColumnCountFromEnd}
                    onChange={onChangeEndCountText}
                    styles={textFieldStyles}
                />
            </div>
            <MarqueeSelection selection={selection}>
                <DetailsList
                    setKey="items"
                    items={items}
                    columns={columns}
                    selection={selection}
                    selectionPreservedOnEmptyClick={true}
                    onItemInvoked={onItemInvoked}
                    onRenderItemColumn={onRenderItemColumn}
                    dragDropEvents={getDragDropEvents()}
                    columnReorderOptions={isColumnReorderEnabled ? getColumnReorderOptions() : undefined}
                    ariaLabelForSelectionColumn="Toggle selection"
                    ariaLabelForSelectAllCheckbox="Toggle selection for all items"
                    checkButtonAriaLabel="select row"
                />
            </MarqueeSelection>
        </div>
    );
}
