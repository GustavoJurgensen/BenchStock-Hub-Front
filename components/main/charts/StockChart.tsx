"use client";
import { twMerge } from "tailwind-merge";
import LineChart, { ChartFilter, ChartSubtitle } from "./LineChart";

export type StockValue = {
  Datetime: string;
  Value: number;
};

export type StockChartProps = {
  className?: string;
  values: StockValue[];
};

const subtitles: ChartSubtitle = {
  value: {
    label: "Price",
    color: "var(--chart-1)",
  },
};
const filters: ChartFilter = {
  options: [
    {
      label: "Last 3 months",
      value: "90",
    },
    {
      label: "Last 30 days",
      value: "30",
    },
    {
      label: "Last 7 days",
      value: "7",
    },
  ],
  onFilter: (filter, values) => {
    const referenceDate = new Date("2024-06-30");
    console.log(referenceDate);
    const daysToSubtract = Number.parseInt(filter.value);
    referenceDate.setDate(referenceDate.getDate() - daysToSubtract);
    return values.filter((o) => new Date(o["date"]) > referenceDate);
  },
  placeHolder: "Last 3 months",
};
export default function StockChart({
  className = "",
  values,
}: StockChartProps) {
  return (
    <LineChart
      className={twMerge("", className)}
      values={values.map((o) => {
        return { date: o.Datetime, value: o.Value };
      })}
      name="valueMarket"
      subtitles={subtitles}
      axisKey="date"
      displayLegend={false}
      filter={filters}
      title="Market value"
    />
  );
}
