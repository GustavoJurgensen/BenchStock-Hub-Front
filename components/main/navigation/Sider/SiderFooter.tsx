import { SidebarFooter } from "@/components/ui/sidebar";
import { twMerge } from "tailwind-merge";
import SiderGroup, { SiderItem } from "./SiderGroup";
import { HelpCircleIcon } from "lucide-react";

export type SiderFooterProps = {
  className?: string;
};

const items: SiderItem[] = [
  {
    title: "Help",
    url: "/help",
    icon: HelpCircleIcon,
  },
];

export default function SiderFooter({ className = "" }: SiderFooterProps) {
  return (
    <SidebarFooter className={twMerge("", className)}>
      <SiderGroup items={items} />
    </SidebarFooter>
  );
}
