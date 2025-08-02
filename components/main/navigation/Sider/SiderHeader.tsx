import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/public/logo";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import ThemeButton from "../../buttons/ThemeButton";

export type SiderHeaderProps = {
  className?: string;
};
export default function SiderHeader({ className = "" }: SiderHeaderProps) {
  return (
    <SidebarHeader
      className={twMerge(
        "bg-neutral-100 dark:bg-neutral-800 border-b",
        className
      )}
    >
      <SidebarHeader className="flex flex-row justify-between items-center">
        <div className="flex-1 flex flex-row items-center gap-2 select-none">
          <span className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-neutral-300 dark:text-neutral-800 bg-neutral-800 dark:bg-neutral-300">
            GP
          </span>
          <span className="flex-1 line-clamp-1 text-sm">
            Gustavo Pilon Jurgensen
          </span>
        </div>
        <div className="flex flex-row gap-1">
          <SidebarTrigger />
          <ThemeButton />
        </div>
      </SidebarHeader>
    </SidebarHeader>
  );
}
