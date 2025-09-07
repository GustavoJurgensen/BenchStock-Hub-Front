import { Home, Settings } from "lucide-react";
import SiderGroup, { SiderItem } from "./SiderGroup";

const items: SiderItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

export default function SiderApplicationGroup() {
  return <SiderGroup items={items} title="Application" />;
}
