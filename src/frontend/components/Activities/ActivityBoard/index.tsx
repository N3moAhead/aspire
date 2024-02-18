import { Dispatch, SetStateAction } from "react";
import { DoneHashType } from "types/generic";
import ActivityBoardElement from "./ActivityBoardElement";
import { FullActivity } from "types/activity";

export default function ActivityBoard(props: {
  activities: Array<FullActivity>;
  doneHash: DoneHashType;
  setDoneHash: Dispatch<SetStateAction<DoneHashType>>;
}) {
  const { activities, doneHash, setDoneHash } = props;

  return (
    <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 min-h-8 m-1">
      {activities.map((activity) => (
        <ActivityBoardElement
          activity={activity}
          doneHash={doneHash}
          key={`GOAL_BOARD_ELEMENT_${activity.id}`}
          setDoneHash={setDoneHash}
        />
      ))}
    </div>
  );
}
