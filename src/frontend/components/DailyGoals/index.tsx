import { Title } from "@tremor/react";
import GoalList from "./DailyGoalList";
import type { DailyGoal } from "../../../types/goal";

const goals: Array<DailyGoal> = [
  { description: "Sport", done: true },
  { description: "Freunde", done: true },
  { description: "Tinder", done: false },
  { description: "Wäsche", done: false },
];

export default function DailyGoals() {
  return (
    <div className="w-full">
      <Title>Daily Goals</Title>
      <GoalList dailyGoals={goals} />
    </div>
  );
}
