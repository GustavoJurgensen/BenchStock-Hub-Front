"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export type ToggleOption = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

export type ToggleButtonProps = {
  className?: string;
  options: ToggleOption[];
  defaultOptIndex?: number;
  onChange?: (opt: ToggleOption) => void;
};

export function ToggleButton({
  className = "",
  options,
  defaultOptIndex = 0,
  onChange = () => {},
}: ToggleButtonProps) {
  const defaultOpt = options[defaultOptIndex];
  const [icon, setIcon] = useState(defaultOpt.icon);
  const [selectOpt, setSelectOpt] = useState(defaultOpt);
  const select = (opt: ToggleOption) => {
    setIcon(opt.icon);
    onChange(opt);
    setSelectOpt(opt);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {options.length > 2 ? (
          <Button variant="ghost" size="icon">
            {icon}
            <span className="sr-only">Toggle</span>
          </Button>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              select(options.filter((o) => o.value != selectOpt.value)[0])
            }
          >
            {icon}
            <span className="sr-only">Toggle</span>
          </Button>
        )}
      </DropdownMenuTrigger>
      {options.length > 2 ? (
        <DropdownMenuContent align="center">
          {options.map((o) => (
            <DropdownMenuItem key={o.value} onClick={() => select(o)}>
              {o.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      ) : null}
    </DropdownMenu>
  );
}
