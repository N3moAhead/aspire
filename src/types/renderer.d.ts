import { Day } from "@prisma/client";
import { FullCategory } from "./activity";
import { FullMood } from "./mood";

export interface IElectronAPI {
  getCurrentDay: () => Promise<Day>;
  getCategoriesForDay: (day: Day) => Promise<FullCategory[]>;
  toggleDayActivity: (dayActivityId: number, newDone: boolean) => void;
  getDayMoods: (day: Day) => Promise<FullMood[]>;
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
