import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";

export type SiderHeaderProps = {
  className?: string;
  collapsedSideBar?: boolean;
};
export default function SiderHeader({
  className = "",
  collapsedSideBar,
}: SiderHeaderProps) {
  return (
    <SidebarHeader className="bg-neutral-100 dark:bg-neutral-800 border-b">
      <SidebarHeader>
        {collapsedSideBar ? <SidebarTrigger /> : null}
      </SidebarHeader>
    </SidebarHeader>
  );
}
