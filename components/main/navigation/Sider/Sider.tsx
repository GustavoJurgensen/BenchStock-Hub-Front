import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { twMerge } from "tailwind-merge";
import SiderApplicationGroup from "./SiderApplicationGroup";
import SiderHeader from "./SiderHeader";
import SiderFooter from "./SiderFooter";
import SiderStocksGroup from "./SiderStocksGroup";

export type SiderProps = {
  className?: string;
  collapsedSideBar?: boolean;
};

export default function Sider({
  className = "",
  collapsedSideBar = true,
}: SiderProps) {
  return (
    <Sidebar className={twMerge("", className)}>
      <SiderHeader collapsedSideBar={collapsedSideBar} />
      <SidebarContent>
        <SiderApplicationGroup />
        <SiderStocksGroup />
      </SidebarContent>
      <SiderFooter />
    </Sidebar>
  );
}
