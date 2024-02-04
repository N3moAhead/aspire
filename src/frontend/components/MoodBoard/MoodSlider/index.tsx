import { useState } from "react";
import { Subtitle } from "@tremor/react";
import SadIcon from "./SadIcon";
import HappyIcon from "./HappyIcon";
import MoodElement from "./MoodElement";

type MoodSliderProps = {
  description: string;
};

export default function MoodSlider(props: MoodSliderProps) {
  const { description } = props;
  const [mood, setMood] = useState(null);

  return (
    <div>
      <Subtitle>{description}</Subtitle>
      <div className="flex items-center justify-between w-full">
        <SadIcon />
        <div className="grid grid-cols-5 gap-2 w-full h-8">
          <MoodElement
            mood={mood}
            setMood={setMood}
            value={1}
            activeColor="bg-[#ef4444]"
          />
          <MoodElement
            mood={mood}
            setMood={setMood}
            value={2}
            activeColor="bg-[#f59e0b]"
          />
          <MoodElement
            mood={mood}
            setMood={setMood}
            value={3}
            activeColor="bg-[#737373]"
          />
          <MoodElement
            mood={mood}
            setMood={setMood}
            value={4}
            activeColor="bg-[#14b8a6]"
          />
          <MoodElement
            mood={mood}
            setMood={setMood}
            value={5}
            activeColor="bg-[#22c55e]"
          />
        </div>
        <HappyIcon />
      </div>
    </div>
  );
}
