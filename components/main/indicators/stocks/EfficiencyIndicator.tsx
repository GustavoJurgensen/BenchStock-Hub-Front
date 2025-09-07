import BaseIndicatorGrid, { IndicatorOption } from "./BaseIndicatorGrid";

export type EfficiencyIndicatorProps = {
  className?: string;
};

const indicators = [
  {
    key: "mBruta",
    label: "M. BRUTA",
    about: "M. BRUTA",
  },
  {
    key: "mEditda",
    label: "M. EBITDA",
    about: "M. EBITDA",
  },
  {
    key: "mEbit",
    label: "M. EBIT",
    about: "M. EBIT",
  },
  {
    key: "mLig",
    label: "M. LIQUIDA",
    about: "M. LIQUIDA",
  },
] as IndicatorOption[];
const data = {
  mBruta: "10",
  mEditda: "10",
  mEbit: "10",
  mLig: "10",
};
export default function EfficiencyIndicator({
  className,
}: EfficiencyIndicatorProps) {
  return (
    <BaseIndicatorGrid title="Efficiency" data={data} options={indicators} />
  );
}
