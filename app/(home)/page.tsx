import { ToggleButton } from "@/components/main/buttons/ToggleButton";
import LineChart from "@/components/main/charts/LineChart";

export default function Home() {
  return (
    <>
      <ToggleButton/>
      <LineChart className="w-full h-full"/>
    </>);
}
