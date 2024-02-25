import { Day } from "@prisma/client";
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  getCurrentDay: () => ipcRenderer.invoke("getCurrentDay"),
  getCategoriesForDay: (day: Day) =>
    ipcRenderer.invoke("getCategoriesForDay", day),
  toggleDayActivity: (dayActivityId: number, newDone: boolean) =>
    ipcRenderer.send("toggleDayActivity", dayActivityId, newDone),
  getDayMoods: (day: Day) => ipcRenderer.invoke("getDayMoods", day),
});
