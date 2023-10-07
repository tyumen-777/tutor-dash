import { ICONS } from "../../utils/Icon/icons";

export interface SideBarMenu {
    icon: keyof typeof ICONS;
    name: string;
    link: string;
}

export interface SidebarItemProps {

}