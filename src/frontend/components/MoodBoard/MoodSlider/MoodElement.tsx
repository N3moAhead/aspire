type MoodElementProps = {
  setMoodValue: (newValue: number) => void;
  value: number;
  moodValue: number;
  activeColor: string;
};

const moodText = [null, "Bad", "Meh", "Okay", "Good", "Amazing"];

export default function MoodElement(props: MoodElementProps) {
  const { moodValue, setMoodValue, value, activeColor } = props;
  const active = moodValue === value;
  const backgroundColor = active
    ? activeColor
    : `bg-tremor-background-subtle dark:bg-dark-tremor-background-subtle`;
  return (
    <div
      onClick={() => setMoodValue(value)}
      className={`flex hover:border border-tremor-border dark:border-dark-tremor-border rounded-md justify-center items-center w-full h-full cursor-pointer ${backgroundColor}`}
    >
      {active ? <span className="min-w-max">{moodText[value]}</span> : ""}
    </div>
  );
}
