import { StockValue } from "@/components/main/charts/StockChart";
import { get } from "@/utils/fetcher";

const baseUri = "/stocks";

export function getStockHistory(
  ticker: string,
  days: number
): Promise<StockValue[]> {
  return get(`${baseUri}/history?ticker=${ticker}&days=${days}`).then(
    (res) => res as StockValue[]
  );
}
