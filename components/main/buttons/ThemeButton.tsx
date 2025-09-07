"use client";
import { MonitorCog, Moon, Sun } from "lucide-react";
import { ToggleButton, ToggleOption } from "./ToggleButton";
import { useTheme } from "next-themes";

const themeOptions: ToggleOption[] = [
  {
    icon: <Moon />,
    label: "Dark mode",
    value: "dark",
  },
  {
    icon: <Sun />,
    label: "Light mode",
    value: "light",
  },
  {
    icon: <MonitorCog />,
    label: "System mode",
    value: "system",
  },
];

export default function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const onChange = (opt: ToggleOption) => {
    setTheme(opt.value);
  };
  return (
    <ToggleButton
      options={themeOptions}
      defaultOptIndex={theme == "dark" ? 0 : theme == "light" ? 1 : 2}
      onChange={(opt) => onChange(opt)}
    />
  );
}
