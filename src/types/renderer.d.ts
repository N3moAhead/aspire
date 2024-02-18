import { Day } from "@prisma/client";
import { FullCategory } from "./activity";

export interface IElectronAPI {
  getCurrentDay: () => Promise<Day>;
  getCategoriesForDay: (day: Day) => Promise<FullCategory[]>;
  toggleDayActivity: (dayActivityId: number, newDone: boolean) => void;
}

declare global {
  interface Window {
    api: IElectronAPI;
  }
}
