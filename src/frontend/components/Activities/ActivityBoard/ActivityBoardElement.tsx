import { Dispatch, SetStateAction } from "react";
import { Text } from "@tremor/react";
import { DailyActivity } from "types/goal";
import { DoneHashType } from "types/generic";

export default function ActivityBoardElement(props: {
  goal: DailyActivity;
  doneHash: DoneHashType;
  setDoneHash: Dispatch<SetStateAction<DoneHashType>>;
}) {
  const { goal, doneHash, setDoneHash } = props;

  return (
    <div
      onClick={() =>
        setDoneHash((current: DoneHashType) => {
          const currentObject = { ...current };
          currentObject[goal.id] = !current[goal.id];
          return currentObject;
        })
      }
      style={doneHash?.[goal.id] ? { backgroundColor: goal.color } : {}}
      className={`
        cursor-pointer w-full h-full flex justify-center relative
        items-center rounded-md hover:border-tremor-border
        hover:dark:border-dark-tremor-border min-h-8 border border-transparent
        ${
          !doneHash?.[goal.id]
            ? "bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle"
            : ""
        }
      `}
    >
      {doneHash?.[goal.id] ? (
        <span className="overflow-hidden whitespace-nowrap overflow-ellipsis px-2">
          {goal.description}
        </span>
      ) : (
        <Text className="overflow-hidden whitespace-nowrap overflow-ellipsis px-2">
          {goal.description}
        </Text>
      )}
    </div>
  );
}
