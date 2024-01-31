import { ListItem, Text, Switch } from "@tremor/react";
import { DailyGoal } from "../../../../types/goal";

export default function GoalListElement(props: { dailyGoal: DailyGoal }) {
  const { description, done } = props.dailyGoal;
  return (
    <ListItem>
      <Switch checked={done} />
      <Text>{description}</Text>
    </ListItem>
  );
}
