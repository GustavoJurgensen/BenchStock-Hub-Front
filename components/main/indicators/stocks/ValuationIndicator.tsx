import BaseIndicatorGrid, { IndicatorOption } from "./BaseIndicatorGrid";

export type ValuationIndicatorProps = {
  className?: string;
};

const indicators = [
  {
    key: "yield",
    label: "Yield",
    about: "Yield",
  },
  {
    key: "pl",
    label: "P/L",
    about: "P/L",
  },
  {
    key: "pegRatio",
    label: "PEG RATIO",
    about: "PEG RATIO",
  },
  {
    key: "pvp",
    label: "P/VP",
    about: "P/VP",
  },
  { key: "evEbitida", label: "EV/EBITDA", about: "EV/EBITDA" },
  {
    key: "evEbit",
    label: "EV/EBIT",
    about: "EV/EBIT",
  },
  {
    key: "pEbitida",
    label: "P/EBITDA",
    about: "P/EBITDA",
  },
  {
    key: "pEbit",
    label: "P/EBIT",
    about: "P/EBIT",
  },
  {
    key: "vpa",
    label: "VPA",
    about: "VPA",
  },
  {
    key: "pAtivo",
    label: "P/ATIVO",
    about: "P/ATIVO",
  },
  {
    key: "lpa",
    label: "LPA",
    about: "LPA",
  },
  {
    key: "pSr",
    label: "P/SR",
    about: "P/SR",
  },
  {
    key: "pCap",
    label: "P/CAP. GIRO",
    about: "P/CAP. GIRO",
  },
  {
    key: "pAtivoCirc",
    label: "P/ATIVO CIRC. LIQ",
    about: "P/ATIVO CIRC. LIQ",
  },
] as IndicatorOption[];
const data = {
  yield: "10",
  pl: "10",
  pegRatio: "10",
  pvp: "10",
  evEbitida: "10",
  evEbit: "10",
  pEbitida: "10",
  pEbit: "10",
  vpa: "10",
  pAtivo: "10",
  lpa: "10",
  pSr: "10",
  pCap: "10",
  pAtivoCirc: "10",
};
export default function ValuationIndicator({
  className,
}: ValuationIndicatorProps) {
  return (
    <BaseIndicatorGrid title="Valuation" data={data} options={indicators} />
  );
}
