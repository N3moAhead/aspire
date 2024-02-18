import { Dispatch, SetStateAction } from "react";
import { DoneHashType } from "types/generic";
import ActivityBoardElement from "./ActivityBoardElement";
import { FullCategory } from "types/activity";

export default function ActivityBoard(props: {
  categories?: FullCategory[];
  doneHash?: DoneHashType;
  setDoneHash: Dispatch<SetStateAction<DoneHashType>>;
}) {
  const { categories, doneHash, setDoneHash } = props;

  return (
    <div className="grid grid-cols-4 xl:grid-cols-5 gap-2 min-h-8 m-1">
      {categories?.map((category: FullCategory) => {
        return category.activities.map((activity) => {
          return (
            <ActivityBoardElement
              color={category.color}
              activity={activity}
              doneHash={doneHash}
              key={`GOAL_BOARD_ELEMENT_${activity.id}`}
              setDoneHash={setDoneHash}
            />
          );
        });
      })}
    </div>
  );
}
