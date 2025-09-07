import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { twMerge } from "tailwind-merge";
import SiderApplicationGroup from "./SiderApplicationGroup";
import SiderFooter from "./SiderFooter";
import SiderHeader from "./SiderHeader";
import SiderStocksGroup from "./SiderStocksGroup";

export type SiderProps = {
  className?: string;
};

export default function Sider({ className = "" }: SiderProps) {
  return (
    <Sidebar className={twMerge("", className)}>
      <SiderHeader />
      <SidebarContent>
        <SiderApplicationGroup />
        <SiderStocksGroup />
      </SidebarContent>
      <SiderFooter />
    </Sidebar>
  );
}
