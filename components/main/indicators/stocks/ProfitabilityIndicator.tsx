import BaseIndicatorGrid, { IndicatorOption } from "./BaseIndicatorGrid";

export type ProfitabilityIndicatorProps = {
  className?: string;
};

const indicators = [
  {
    key: "roe",
    label: "ROE",
    about: "ROE",
  },
  {
    key: "roa",
    label: "ROA",
    about: "ROA",
  },
  {
    key: "roic",
    label: "ROIC",
    about: "ROIC",
  },
  {
    key: "giroAtivo",
    label: "GIRO ATIVOS",
    about: "GIRO ATIVOS",
  },
] as IndicatorOption[];
const data = {
  roe: "10",
  roa: "10",
  roic: "10",
  giroAtivo: "10",
};
export default function ProfitabilityIndicator({
  className,
}: ProfitabilityIndicatorProps) {
  return (
    <BaseIndicatorGrid title="Profitability" data={data} options={indicators} />
  );
}
