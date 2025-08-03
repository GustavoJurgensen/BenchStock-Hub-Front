import { HelpCircle } from "lucide-react";
import { twMerge } from "tailwind-merge";

export type CardIndicatorProps = {
  className?: string;
  title?: string;
  about?: string;
  value: string | React.ReactNode;
  footer?: string | React.ReactNode;
};
export default function CardIndicator({
  className = "",
  title,
  about,
  value,
  footer,
}: CardIndicatorProps) {
  return (
    <div
      className={twMerge(
        "bg-card h-fit text-card-foreground flex flex-col gap-1 p-2 rounded-xl border shadow-sm",
        className
      )}
    >
      <div className="flex justify-between items-center gap-1 text-xs w-full">
        {title ? (
          <span className="font-semibold line-clamp-1 flex-1">{title}</span>
        ) : null}
        {about ? (
          <HelpCircle
            size={14}
            className="text-neutral-400 hover:cursor-pointer"
          />
        ) : null}
      </div>
      <div className="text-lg text-center w-full">{value}</div>
      {footer ? <div className="text-xs text-center">{footer}</div> : null}
    </div>
  );
}
