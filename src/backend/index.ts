import { app, ipcMain } from "electron";
import { getCurrentDay } from "./controller/day";
import {
  getCategoriesForDay,
  toggleDayActivity,
} from "./controller/activities";

app.whenReady().then(() => {
  ipcMain.handle("getCurrentDay", getCurrentDay);
  ipcMain.handle("getCategoriesForDay", getCategoriesForDay);
  ipcMain.on("toggleDayActivity", toggleDayActivity);
});
