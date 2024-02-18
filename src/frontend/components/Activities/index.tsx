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
  const [categories, setCategories] = useState<FullCategory[]>([]);

  useEffect(() => {
    // TODO Add a loading animation and State
    const getNewActivities = async () => {
      const newCategories: FullCategory[] =
        await window.api.getCategoriesForDay(day);
      const newDoneHash: DoneHashType = {};
      newCategories.forEach((category: FullCategory) => {
        category.activities.forEach((activity: FullActivity) => {
          const [status] = activity.dayActivities;
          newDoneHash[activity.id] = status.done;
        });
      });
      setCategories(newCategories);
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
        categories={categories}
        doneHash={doneHash}
        setDoneHash={setDoneHash}
      />
    </Card>
  );
}
