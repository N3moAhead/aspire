import { Card, Title, Subtitle } from "@tremor/react";
import type { DailyActivity } from "../../../types/goal";
import type { DoneHashType } from "../../../types/generic";
import { useEffect, useState } from "react";
import ActivityBoard from "./ActivityBoard";

const activities: Array<DailyActivity> = [
  { description: "Sport", done: false, id: 1, color: "#84cc16" },
  { description: "Freunde Treffen", done: false, id: 2, color: "#eab308" },
  { description: "Tinder", done: false, id: 3, color: "#06b6d4" },
  { description: "Wäsche", done: false, id: 4, color: "#0ea5e9" },
  { description: "Zimmer Aufräumen", done: false, id: 5, color: "#10b981" },
  { description: "Date", done: false, id: 6, color: "#14b8a6" },
  { description: "Zocken", done: false, id: 7, color: "#a855f7" },
  { description: "Kochen", done: false, id: 8, color: "#d946ef" },
  { description: "Kuscheln", done: false, id: 9, color: "#84cc16" },
  { description: "Wandern", done: false, id: 10, color: "#eab308" },
  { description: "Party", done: false, id: 11, color: "#06b6d4" },
  { description: "Rave", done: false, id: 12, color: "#0ea5e9" },
  { description: "Festival", done: false, id: 13, color: "#10b981" },
  { description: "Fernsehen", done: false, id: 14, color: "#14b8a6" },
  { description: "Sauna", done: false, id: 16, color: "#d946ef" },
  {
    description: "Ganz viel mit katzen spielen!",
    done: false,
    id: 17,
    color: "#d946ef",
  },
];

export default function DailyGoals() {
  const [doneHash, setDoneHash] = useState<DoneHashType>();

  useEffect(() => {
    const newDoneHash: Record<number, boolean> = {};
    activities.forEach((activity) => {
      newDoneHash[activity.id] = activity.done;
    });
    setDoneHash(newDoneHash);
  }, []);

  return (
    <Card>
      <Title>Todays Activities</Title>
      <Subtitle>What did you do today?</Subtitle>
      <ActivityBoard
        activities={activities}
        doneHash={doneHash}
        setDoneHash={setDoneHash}
      />
    </Card>
  );
}
