import { Card, Title } from "@tremor/react";
import MoodSlider from "./MoodSlider";

export default function MoodBoard() {
  return (
    <Card>
      <Title>Mood</Title>
      <div className="grid grid-cols-1 gap-2">
        <MoodSlider description="How has your day been?" />
        <MoodSlider description="And how was work?" />
      </div>
    </Card>
  );
}
