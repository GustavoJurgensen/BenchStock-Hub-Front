import BaseIndicatorGrid, { IndicatorOption } from "./BaseIndicatorGrid";

export type DeftIndicatorProps = {
  className?: string;
};

const indicators = [
  {
    key: "divLiqPL",
    label: "Div. Liquida/PL",
    about: "Div. Liquida/PL",
  },
  {
    key: "divLiqEbitda",
    label: "Div. Liquida/EBITDA",
    about: "Div. Liquida/EBITDA",
  },
  {
    key: "divLiqEbit",
    label: "Div. Liquida/EBIT",
    about: "Div. Liquida/EBIT",
  },
  {
    key: "plAtivos",
    label: "PL/ATIVOS",
    about: "PL/ATIVOS",
  },
  {
    key: "passivoAtivos",
    label: "PASSIVOS/ATIVOS",
    about: "PASSIVOS/ATIVOS",
  },
  {
    key: "liqCorr",
    label: "LIQ. CORRRENTE",
    about: "LIQ. CORRRENTE",
  },
] as IndicatorOption[];
const data = {
  divLiqPL: "10",
  divLiqEbitda: "10",
  divLiqEbit: "10",
  plAtivos: "10",
  passivoAtivos: "10",
  liqCorr: "10",
};
export default function DeftIndicator({ className }: DeftIndicatorProps) {
  return <BaseIndicatorGrid title="Deft" data={data} options={indicators} />;
}
