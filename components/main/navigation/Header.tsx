import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/public/logo";
import { Search } from "lucide-react";
import Link from "next/link";
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
    <div
      className={twMerge(
        "sticky top-0 left-0 bg-white dark:bg-black z-10 gap-2 flex items-center justify-between",
        className
      )}
    >
      <div className="flex flex-row gap-2 items-center">
        {!collapsedSideBar ? <SidebarTrigger /> : null}
        <Link
          href="/"
          className="flex flex-row h-full items-center gap-1 font-medium text-2xl text-neutral-700 dark:text-neutral-300"
        >
          <Logo className="h-10 w-10 fill-neutral-700 dark:fill-neutral-300 " />
          <span className="select-none">BenchStock Hub</span>
        </Link>
      </div>
      <div>
        <Button variant="ghost">
          <Search />
        </Button>
      </div>
    </div>
  );
}
