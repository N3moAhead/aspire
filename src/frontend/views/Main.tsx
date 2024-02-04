import Chart from "../components/Chart";
import DailyGoals from "../components/DailyGoals";
import MoodBoard from "../components/MoodBoard";

export default function Main() {
  return (
    <div className="p-16 grid grid-cols-2 gap-5 w-full h-full">
      <MoodBoard />
      <DailyGoals />
      <div className="col-span-2">
        <Chart />
      </div>
    </div>
  );
}
