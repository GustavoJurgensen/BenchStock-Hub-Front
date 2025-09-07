import { twMerge } from "tailwind-merge";

export type FooterProps = {
  className?: string;
  collapsedSideBar?: boolean;
};
export default function Footer({ className = "" }: FooterProps) {
  return (
    <div
      className={twMerge(
        "bg-white w-full dark:bg-black text-xs p-2 flex items-center justify-between border-t",
        className
      )}
    >
      <span className="w-full text-center line-clamp-1">
        Developed by Gustavo Pilon Jürgensen. Copyright, all rights reserved.
      </span>
    </div>
  );
}
