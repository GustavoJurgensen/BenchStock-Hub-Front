import { BookText, ChartCandlestick, Search } from "lucide-react";
import SiderGroup, { SiderItem } from "./SiderGroup";

const items: SiderItem[] = [
  {
    title: "About",
    url: "/stocks",
    icon: BookText,
  },
  {
    title: "Search stocks",
    url: "/stocks/search",
    icon: Search,
  },
  {
    title: "Benchmark",
    url: "/stocks/benchmark",
    icon: ChartCandlestick,
  },
];

export default function SiderStocksGroup() {
  return <SiderGroup items={items} title="Stocks" />;
}
