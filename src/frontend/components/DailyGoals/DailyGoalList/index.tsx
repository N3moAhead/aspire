import { List } from "@tremor/react";
import { DailyGoal } from "../../../../types/goal";
import GoalListElement from "./GoalListElement";

export default function GoalList(props: { dailyGoals: Array<DailyGoal> }) {
  const { dailyGoals } = props;
  return (
    <List>
      {dailyGoals.map((dailyGoal) => (
        <GoalListElement dailyGoal={dailyGoal} />
      ))}
    </List>
  );
}
