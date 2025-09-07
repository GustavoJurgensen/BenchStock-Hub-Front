import { twMerge } from "tailwind-merge";
import DeftIndicator from "./DebtIndicator";
import EfficiencyIndicator from "./EfficiencyIndicator";
import ValuationIndicator from "./ValuationIndicator";
import ProfitabilityIndicator from "./ProfitabilityIndicator";
import GrowthIndicator from "./GrowthIndicator";

export type MarketIndicatorProps = {
  className?: string;
};

export default function MarketIndicator({ className }: MarketIndicatorProps) {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      <span className="text-2xl">Market Indicators</span>
      <ValuationIndicator />
      <DeftIndicator />
      <EfficiencyIndicator />
      <ProfitabilityIndicator />
      <GrowthIndicator />
    </div>
  );
}
