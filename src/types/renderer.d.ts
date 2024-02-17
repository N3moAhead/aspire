import { Day } from "@prisma/client";

export interface IElectronAPI {
  getCurrentDay: () => Promise<Day>;
}

declare global {
  interface Window {
    dayController: IElectronAPI;
  }
}
