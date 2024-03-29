import { useState, useEffect } from "react";
import type { Day } from "@prisma/client";
import Chart from "../components/Chart";
import Activities from "../components/Activities";
import MoodBoard from "../components/MoodBoard";

export default function Main() {
  const [currentDay, setCurrentDay] = useState<Day>();

  useEffect(() => {
    const getCurrentDay = async () => {
      const newCurrentDay = await window.api.getCurrentDay();
      setCurrentDay(newCurrentDay);
    };

    getCurrentDay();
  }, []);

  return (
    <div className="p-2 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
      <MoodBoard day={currentDay} />
      <Activities day={currentDay} />
      <div className="col-span-1 lg:col-span-2">
        <Chart />
      </div>
    </div>
  );
}
