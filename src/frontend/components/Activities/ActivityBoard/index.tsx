import { Dispatch, SetStateAction } from "react";
import { DailyActivity } from "types/goal";
import { DoneHashType } from "types/generic";
import ActivityBoardElement from "./ActivityBoardElement";

export default function ActivityBoard(props: {
  activities: Array<DailyActivity>;
  doneHash: DoneHashType;
  setDoneHash: Dispatch<SetStateAction<DoneHashType>>;
}) {
  const { activities, doneHash, setDoneHash } = props;

  return (
    <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 min-h-8 m-1">
      {activities.map((activity) => (
        <ActivityBoardElement
          goal={activity}
          doneHash={doneHash}
          key={`GOAL_BOARD_ELEMENT_${activity.id}`}
          setDoneHash={setDoneHash}
        />
      ))}
    </div>
  );
}
