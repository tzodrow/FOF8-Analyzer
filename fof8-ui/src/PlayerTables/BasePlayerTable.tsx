import { Checkbox, ConstrainMode, DetailsList, IColumn, IDetailsColumnRenderTooltipProps, IDetailsHeaderProps, IRenderFunction, mergeStyleSets, Panel, PrimaryButton, ScrollablePane, ScrollbarVisibility, Stack, Sticky, StickyPositionType, TooltipHost } from '@fluentui/react';
import { useState } from 'react';
import { IPlayerAttributeTextFieldProps, PlayerAttributeTextField } from '../Common/Components/PlayerAttributeTextField';
import { IPlayer } from '../Models/IPlayer';

const columnMinWidth = 45;
const columns: Array<IColumn> = [
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
    }
});

export interface IBasePlayerTableProps {
    checkLowValue: boolean;
    positionColumns: Array<IColumn>;
    players: Array<IPlayer>;
    playerAttributeFilterOptions: Array<IPlayerAttributeTextFieldProps>;
    onPlayerFilter: (value: IPlayer) => boolean;
    onClearFiltersClick: () => void;
    setCheckLowValue: (newVal: boolean) => void;
}

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

export function BasePlayerTable(props: IBasePlayerTableProps) {
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    let players = props.players.filter(props.onPlayerFilter);
    players.sort((a, b) => b.grade - a.grade);

    return (
        <div className={classNames.wrapper}>
            <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                <Sticky stickyPosition={StickyPositionType.Header} isScrollSynced>
                    <PrimaryButton text={"Filters"} onClick={() => setIsPanelOpen(true)} />
                </Sticky>
                <DetailsList
                    onRenderDetailsHeader={onRenderDetailsHeader}
                    items={players}
                    columns={[...columns, ...props.positionColumns]}
                    constrainMode={ConstrainMode.unconstrained}
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