import { Checkbox, ConstrainMode, DetailsList, Dropdown, IColumn, IDetailsColumnRenderTooltipProps, IDetailsHeaderProps, IDropdownOption, IRenderFunction, mergeStyleSets, Panel, PrimaryButton, ScrollablePane, ScrollbarVisibility, SelectionMode, Stack, Sticky, StickyPositionType, TooltipHost } from '@fluentui/react';
import { useState } from 'react';
import { DraftBoardButton } from '../Common/Components/DraftBoardButton';
import { IPlayerAttributeTextFieldProps, PlayerAttributeTextField } from '../Common/Components/PlayerAttributeTextField';
import { getAttributeValue } from '../Common/Functions/GetAttribute';
import { Attribute } from '../Enums/Attributes';
import { IPlayer } from '../Models/IPlayer';

const columnMinWidth = 45;
const columns: Array<IColumn> = [
    {
        key: 'draftBoardButton',
        name: 'Draft Board',
        minWidth: 100,
        maxWidth: 100,
        ariaLabel: 'Draft Board',
        onRender: (item?: IPlayer) => {
            return item ? <DraftBoardButton player={item} /> : <span />
        }
    },
    {
        key: 'firstName',
        name: 'First Name',
        fieldName: 'firstName',
        minWidth: 100,
        maxWidth: 100,
        ariaLabel: "First Name"
    },
    {
        key: 'lastName',
        name: 'Last Name',
        fieldName: 'lastName',
        minWidth: 100,
        maxWidth: 100,
        ariaLabel: "Last Name"
    },
    {
        key: 'grade',
        name: 'Grd',
        fieldName: 'grade',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        ariaLabel: "Grade"
    }
];

const classNames = mergeStyleSets({
    wrapper: {
        height: '80vh',
        position: 'relative',
        backgroundColot: 'white'
    },
    filter: {
        backgroundColor: 'white'
    }
});

const onRenderDetailsHeader: IRenderFunction<IDetailsHeaderProps> = (props, defaultRender) => {
    if (!props) {
        return null;
    }
    const onRenderColumnHeaderTooltip: IRenderFunction<IDetailsColumnRenderTooltipProps> = tooltipHostProps => (
        <TooltipHost {...tooltipHostProps} />
    );
    return (
        <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
            {defaultRender!({
                ...props,
                onRenderColumnHeaderTooltip,
            })}
        </Sticky>
    );
};

export interface IBasePlayerTableProps {
    attributes: Array<Attribute>;
    checkLowValue: boolean;
    players: Array<IPlayer>;
    playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps>;
    positionColumns: Array<IColumn>;
    selectedAttributes: Array<Attribute>;
    onClearFiltersClick: () => void;
    onPlayerFilter: (value: IPlayer) => boolean;
    setAttributes: (attributes: Array<Attribute>) => void;
    setCheckLowValue: (newVal: boolean) => void;
}

export function BasePlayerTable(props: IBasePlayerTableProps) {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    let players = props.players.filter(props.onPlayerFilter);
    players.sort((a, b) => b.grade - a.grade);

    const avgCol: IColumn = {
        key: 'avg',
        name: 'Avg',
        fieldName: 'avg',
        minWidth: columnMinWidth,
        maxWidth: columnMinWidth,
        onRender: (item?: IPlayer) => {
            let value = 0;
            if (item && props.selectedAttributes.length > 0) {
                for (let i = 0; i < props.selectedAttributes.length; i++) {
                    value += (getAttributeValue(item, props.selectedAttributes[i]) + getAttributeValue(item, props.selectedAttributes[i], true)) / 2;
                }
                
                value /= props.selectedAttributes.length;
            }
            return (<div>{value.toFixed(1)}</div>)
        },
        ariaLabel: "Average"
    }

    const options = props.attributes.map(attr => {
        return {
            key: attr,
            text: attr
        };
    });

    const onAttributeChange = (option?: IDropdownOption) => {
        if (option) {
            let updatedAttributes = [...props.selectedAttributes];
            let optionAttribute = option.key as Attribute;
            if (option.selected) {
                updatedAttributes.push(optionAttribute);
            } else {
                let removeIndex = updatedAttributes.findIndex(attr => attr === optionAttribute);
                updatedAttributes.splice(removeIndex, 1);
            }
            props.setAttributes(updatedAttributes);
        }
    }

    return (
        <div className={classNames.wrapper}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
                    <Stack horizontal className={classNames.filter}>
                        <PrimaryButton text={"Filters"} onClick={() => setIsPanelOpen(true)} />
                        <Dropdown 
                            multiSelect 
                            selectedKeys={props.selectedAttributes} 
                            options={options} 
                            onChange={(_, option) => onAttributeChange(option)} 
                            placeholder={"Attributes"} 
                        />
                    </Stack>
                </Sticky>
                <DetailsList
                    onRenderDetailsHeader={onRenderDetailsHeader}
                    items={players}
                    columns={[...columns, avgCol, ...props.positionColumns]}
                    constrainMode={ConstrainMode.unconstrained}
                    selectionMode={SelectionMode.none}
                />
            </ScrollablePane>
            <Panel
                headerText="Filter Values"
                isOpen={isPanelOpen}
                onDismiss={() => setIsPanelOpen(false)}
                isLightDismiss
                closeButtonAriaLabel="Close"
            >
                <Stack horizontal verticalAlign={"center"} tokens={{childrenGap: 10}}>
                    <Checkbox label={"Check Low Values"} checked={props.checkLowValue} onChange={(_, checked) => props.setCheckLowValue(checked ? checked : false)} />
                    <PrimaryButton text={"Clear Filters"} onClick={props.onClearFiltersClick} />
                </Stack>
                {props.playerAttributeFilterOptions.map((option, index) => <PlayerAttributeTextField key={index} label={option.label} value={option.value} setOnChange={option.setOnChange} />)}
            </Panel>
        </div>
    );
}