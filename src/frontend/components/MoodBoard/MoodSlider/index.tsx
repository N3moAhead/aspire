import { useState } from "react";
import { Subtitle } from "@tremor/react";
import SadIcon from "./SadIcon";
import HappyIcon from "./HappyIcon";
import MoodElement from "./MoodElement";
import { FullMood } from "types/mood";
import debounce from "../../../helper/debounce";

type MoodSliderProps = {
  mood: FullMood;
};

export default function MoodSlider(props: MoodSliderProps) {
  const { mood } = props;
  const [moodValue, setMoodValue] = useState(mood.dayMoods[0].value);

  const setInDB = (newMoodValue: number) =>
    window.api.setMoodValue(mood.dayMoods[0].id, newMoodValue);

  const debouncedSetInDB = debounce(setInDB, 300);

  const handleMoodValueChange = (newMoodValue: number) =>
    setMoodValue(() => {
      debouncedSetInDB(newMoodValue);
      return newMoodValue;
    });

  return (
    <div>
      <Subtitle>{mood.description}</Subtitle>
      <div className="flex items-center justify-between w-full">
        <SadIcon />
        <div className="grid grid-cols-5 gap-2 w-full h-8">
          <MoodElement
            moodValue={moodValue}
            setMoodValue={handleMoodValueChange}
            value={1}
            activeColor="bg-[#ef4444]"
          />
          <MoodElement
            moodValue={moodValue}
            setMoodValue={handleMoodValueChange}
            value={2}
            activeColor="bg-[#f59e0b]"
          />
          <MoodElement
            moodValue={moodValue}
            setMoodValue={handleMoodValueChange}
            value={3}
            activeColor="bg-[#737373]"
          />
          <MoodElement
            moodValue={moodValue}
            setMoodValue={handleMoodValueChange}
            value={4}
            activeColor="bg-[#14b8a6]"
          />
          <MoodElement
            moodValue={moodValue}
            setMoodValue={handleMoodValueChange}
            value={5}
            activeColor="bg-[#22c55e]"
          />
        </div>
        <HappyIcon />
      </div>
    </div>
  );
}
