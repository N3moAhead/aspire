import { useEffect, useState } from "react";
import { Card, Title } from "@tremor/react";
import MoodSlider from "./MoodSlider";
import { Day } from "@prisma/client";
import { FullMood } from "types/mood";

type MoodBoardProps = {
  day: Day;
};

export default function MoodBoard(props: MoodBoardProps) {
  const { day } = props;
  const [moods, setMoods] = useState<FullMood[]>();

  useEffect(() => {
    const getMoods = async () => {
      const newMoods = await window.api.getDayMoods(day);
      setMoods(newMoods);
    };

    if (day) {
      getMoods();
    }
  }, []);

  return (
    <Card>
      <Title>Mood</Title>
      <div className="grid grid-cols-1 gap-2">
        {moods.map((mood) => (
          <MoodSlider key={`MoodKey_${mood.id}`} mood={mood} />
        ))}
      </div>
    </Card>
  );
}
