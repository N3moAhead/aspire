import { Dispatch, SetStateAction } from "react";
import { Text } from "@tremor/react";
import { DoneHashType } from "types/generic";
import { FullActivity } from "types/activity";
import debounce from "../../../helper/debounce";

const debouncedToggleDay = debounce(window.api.toggleDayActivity, 300);

export default function ActivityBoardElement(props: {
  activity: FullActivity;
  doneHash: DoneHashType;
  setDoneHash: Dispatch<SetStateAction<DoneHashType>>;
}) {
  const { activity, doneHash, setDoneHash } = props;

  const handleClick = () =>
    setDoneHash((current: DoneHashType) => {
      const currentObject = { ...current };
      const newDone = !current[activity.id];
      debouncedToggleDay(activity.dayActivities[0].id, newDone);
      currentObject[activity.id] = newDone;
      return currentObject;
    });

  const Component = doneHash?.[activity.id] ? "span" : Text;
  return (
    <div
      onClick={handleClick}
      // TODO Add color to the categories and display it here
      style={doneHash?.[activity.id] ? { backgroundColor: "red" } : {}}
      className={`
        cursor-pointer w-full h-full flex justify-center relative
        items-center rounded-md hover:border-tremor-border
        hover:dark:border-dark-tremor-border min-h-8 border border-transparent
        ${
          !doneHash?.[activity.id]
            ? "bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle"
            : ""
        }
      `}
    >
      <Component className="overflow-hidden whitespace-nowrap overflow-ellipsis px-2">
        {activity.name}
      </Component>
    </div>
  );
}
