import { SidebarTrigger } from "@/components/ui/sidebar";
import { twMerge } from "tailwind-merge";

export type HeaderProps = {
  className?: string;
  collapsedSideBar?: boolean;
};
export default function Header({
  className = "",
  collapsedSideBar = false,
}: HeaderProps) {
  return (
    <div className={twMerge("gap-2 flex align-middle", className)}>
      {!collapsedSideBar ? <SidebarTrigger /> : null}
      testeeeeeeeeeeeee
    </div>
  );
}
