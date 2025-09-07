import BaseIndicatorGrid, { IndicatorOption } from "./BaseIndicatorGrid";

export type GrowthIndicatorProps = {
  className?: string;
};

const indicators = [
  {
    key: "cagrRec",
    label: "CAGR RECEITAS 5 ANOS",
    about: "CAGR RECEITAS 5 ANOS",
  },
  {
    key: "cagrLuc",
    label: "CAGR LUCROS 5 ANOS",
    about: "CAGR LUCROS 5 ANOS",
  },
] as IndicatorOption[];
const data = {
  cagrRec: "10",
  cagrLuc: "10",
};
export default function GrowthIndicator({ className }: GrowthIndicatorProps) {
  return <BaseIndicatorGrid title="Growth" data={data} options={indicators} />;
}
