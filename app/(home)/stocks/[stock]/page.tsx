import { getStockHistory } from "@/app/api/resources/stocksResource";
import StockChart, { StockValue } from "@/components/main/charts/StockChart";
import MarketIndicator from "@/components/main/indicators/stocks/MarketIndicator";
import PriceIndicator from "@/components/main/indicators/stocks/PriceIndicator";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ stock: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stock } = await params;
  return {
    title: `BenchStock Hub - ${stock}`, // Dynamic title from fetched data
    description: `BenchStock Hub - ${stock}`,
  };
}

export default async function Page({ params }: Props) {
  const { stock } = await params;
  const data: StockValue[] = await getStockHistory(stock, 360 * 10);
  return (
    <div className="mx-32 h-full flex-1 flex flex-col gap-3">
      <div className="w-full text-center text-2xl">{stock}</div>
      <PriceIndicator className="w-full" />
      <StockChart values={data} className="w-full" />
      <MarketIndicator className="w-full" />
    </div>
  );
}
