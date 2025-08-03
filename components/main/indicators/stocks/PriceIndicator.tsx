import { twMerge } from "tailwind-merge";
import CardIndicator from "../CardIndicator";

export type PriceIndicatorProps = {
  className?: string;
};

export default function PriceIndicator({ className }: PriceIndicatorProps) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
        className
      )}
    >
      <CardIndicator
        className="flex-1"
        value="10"
        title="teste"
        about="about"
        footer="footer"
      />
      <CardIndicator
        className="flex-1"
        value="10"
        title="teste"
        about="about"
        footer="footer"
      />
      <CardIndicator
        className="flex-1"
        value="10"
        title="teste"
        about="about"
        footer="footer"
      />
      <CardIndicator
        className="flex-1"
        value="10"
        title="teste"
        about="about"
        footer="footer"
      />
      <CardIndicator
        className="flex-1"
        value="10"
        title="teste"
        about="about"
        footer="footer"
      />
    </div>
  );
}
