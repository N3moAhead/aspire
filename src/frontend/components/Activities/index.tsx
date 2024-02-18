import { Card, Title, Subtitle } from "@tremor/react";
import type { Day } from "@prisma/client";
import type { DoneHashType } from "../../../types/generic";
import { useEffect, useState } from "react";
import ActivityBoard from "./ActivityBoard";
import { FullCategory, FullActivity } from "types/activity";

interface DailyGoalProps {
  day?: Day;
}

export default function DailyGoal(props: DailyGoalProps) {
  const { day } = props;
  const [doneHash, setDoneHash] = useState<DoneHashType>();
  const [activities, setActivities] = useState<FullActivity[]>([]);

  useEffect(() => {
    // TODO Add a loading animation and State
    const getNewActivities = async () => {
      const categories: FullCategory[] =
        await window.api.getCategoriesForDay(day);
      const newActivities: FullActivity[] = [];
      const newDoneHash: DoneHashType = {};
      categories.forEach((category: FullCategory) => {
        category.activities.forEach((activity: FullActivity) => {
          newActivities.push(activity);
          const [status] = activity.dayActivities;
          newDoneHash[activity.id] = status.done;
        });
      });
      setActivities(newActivities);
      setDoneHash(newDoneHash);
    };

    if (day) {
      getNewActivities();
    }
  }, [day]);

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
