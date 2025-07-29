import {
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { HelpCircleIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type SiderFooterProps = {
  className?: string;
};
export default function SiderFooter({ className = "" }: SiderFooterProps) {
  return (
    <SidebarFooter className={twMerge("", className)}>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href={"#help"}>
                  <HelpCircleIcon />
                  <span>Help</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarFooter>
  );
}
