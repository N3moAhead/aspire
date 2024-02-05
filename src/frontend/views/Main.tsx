import Chart from "../components/Chart";
import Activities from "../components/Activities";
import MoodBoard from "../components/MoodBoard";

export default function Main() {
  return (
    <div className="p-2 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full">
      <MoodBoard />
      <Activities />
      <div className="col-span-1 lg:col-span-2">
        <Chart />
      </div>
    </div>
  );
}
