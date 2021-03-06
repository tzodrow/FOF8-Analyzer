import { INavLinkGroup, INavStyles, Nav } from "@fluentui/react";
import { history } from "./Reducers/Store";

const navStyles: Partial<INavStyles> = { root: { width: 300 } };

const navLinkGroups: INavLinkGroup[] = [
    {
        name: 'Tools',
        expandAriaLabel: 'Expand Tools',
        collapseAriaLabel: 'Collapse Tools',
        links: [
            {
                key: 'Home',
                name: 'Home',
                url: '',
                onClick: () => history.push("/")
            },
            {
                key: 'Upload',
                name: 'Upload',
                url: '',
                onClick: () => history.push('/upload')
            },
            {
                key: 'Draft',
                name: 'Draft',
                url: '',
                onClick: () => history.push('/draft')
            },
            {
                key: 'Draft Board',
                name: 'Draft Board',
                url: '',
                onClick: () => history.push('/draftBoard')
            }, 
            {
                key: 'Test Page',
                name: 'Test Page',
                url: '',
                onClick: () => history.push('/test')
            }
        ],
    }
];

export function LeftNav() {
    return (
        <Nav styles={navStyles} ariaLabel="Site Navigation" groups={navLinkGroups} />
    );
}