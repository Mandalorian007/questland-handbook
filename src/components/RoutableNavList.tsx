import React, {ReactElement} from 'react';
import {NavListItemGroup} from "./NavListItemGroup";
import {NavListItem} from "./NavListItem";

export type NavItemGroup = {
    label: string;
    to?: string;
    icon?: ReactElement;
    navItems: NavItem[];
};

export type NavItem = {
    label: string;
    to: string;
};


export const RoutableNavList: React.FC<{ navItemGroups: NavItemGroup[] }> =
    ({
         navItemGroups
     }) => (
        <div>
            {navItemGroups.map(navItemGroup => {
                return navItemGroup.navItems.length > 1
                    ? <NavListItemGroup navItemGroup={navItemGroup}/>
                    : <NavListItem navItemGroup={navItemGroup}/>
            })}
        </div>
    );
