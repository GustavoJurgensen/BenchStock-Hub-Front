import { twMerge } from "tailwind-merge";
import CardIndicator from "../CardIndicator";

export type IndicatorOption = {
  key: string;
  label: string;
  about: string;
};

export type BaseIndicatorGridProps = {
  className?: string;
  title: string;
  options: IndicatorOption[];
  data: any;
};

export default function BaseIndicatorGrid({
  className,
  title,
  options,
  data,
}: BaseIndicatorGridProps) {
  return (
    <div className={twMerge("flex flex-col border rounded-2xl", className)}>
      <span className="text-md w-full text-center border-b p-2">{title}</span>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6 p-4">
        {options.map((opt) => (
          <CardIndicator
            key={opt.key}
            value={data[opt.key]}
            title={opt.label}
            about={opt.about}
          />
        ))}
      </div>
    </div>
  );
}
