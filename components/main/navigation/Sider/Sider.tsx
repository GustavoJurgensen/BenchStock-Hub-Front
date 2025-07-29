import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { twMerge } from "tailwind-merge";
import SiderApplicationGroup from "./SiderApplicationGroup";
import SiderHeader from "./SiderHeader";
import SiderFooter from "./SiderFooter";

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
      </SidebarContent>
      <SiderFooter />
    </Sidebar>
  );
}
