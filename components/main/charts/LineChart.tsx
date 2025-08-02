"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "../../ui/chart";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import { twMerge } from "tailwind-merge";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export type ChartValues = {
  [name: string]: any;
};
export type ChartSubtitle = {
  [name: string]: {
    label?: string;
    color?: string;
  };
};
export type ChartRangeFilter = {
  label: string;
  value: string;
};
export type ChartFilter = {
  options: ChartRangeFilter[];
  onFilter: (filter: ChartRangeFilter, values: ChartValues[]) => ChartValues[];
  placeHolder?: string;
};
export type LineChartProps = {
  name: string;
  className?: string;
  title?: string;
  description?: string;
  subtitles: ChartSubtitle;
  filter?: ChartFilter;
  values: ChartValues[];
  axisKey: string;
  displayLegend?: boolean;
};
export default function LineChart({
  className = "",
  name,
  title,
  description,
  subtitles,
  filter,
  values,
  axisKey,
  displayLegend,
}: LineChartProps) {
  const [filterRange, setFilterRange] = React.useState(
    filter?.options[0].value
  );
  const [filteredData, setFilteredData] = React.useState(values);
  const filterData = (selectedFilter: string) => {
    const opt: ChartRangeFilter | undefined = filter?.options.filter(
      (o) => o.value == selectedFilter
    )[0];
    if (filter?.onFilter && opt) {
      const f = filter?.onFilter(opt, values);
      setFilteredData(f);
      setFilterRange(opt.value);
    }
  };
  return (
    <Card className={twMerge("", className)}>
      <CardHeader className="flex items-center gap-2 border-b sm:flex-row">
        {title ? (
          <CardTitle className="flex text-xl items-center align-middle flex-1 gap-2">
            {title}
            {description ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info size="0.8rem" className="text-neutral-500" />
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                  {description}
                </TooltipContent>
              </Tooltip>
            ) : null}
          </CardTitle>
        ) : null}
        {filter ? (
          <Select value={filterRange} onValueChange={(e) => filterData(e)}>
            <SelectTrigger
              className="hidden sm:ml-auto sm:flex"
              aria-label="Select a value"
            >
              <SelectValue placeholder={filter.placeHolder} />
            </SelectTrigger>
            <SelectContent>
              {filter.options.map((o) => (
                <SelectItem key={o.value} value={o.value}>
                  {o.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : null}
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={subtitles satisfies ChartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              {Object.keys(subtitles)?.map((s) => (
                <linearGradient
                  key={name + s}
                  id={name + s}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={subtitles[s].color}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={subtitles[s].color}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={axisKey}
              tickLine={false}
              axisLine={false}
              tickMargin={3}
              minTickGap={10}
              tickFormatter={(value) => value} //TODO turn dynamic
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => value} //TODO turn dynamic
                  indicator="line"
                />
              }
            />
            {Object.keys(subtitles)?.map((s) => (
              <Area
                key={`ar_${name}${s}`}
                dataKey={s}
                type="natural"
                fill={`url(#${name}${s})`}
                stroke={subtitles[s].color}
                stackId="a"
              />
            ))}
            {displayLegend ? (
              <ChartLegend content={<ChartLegendContent />} />
            ) : null}
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
