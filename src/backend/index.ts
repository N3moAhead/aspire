import { app, ipcMain } from "electron";
import { getCurrentDay } from "./controller/day";
import {
  getCategoriesForDay,
  toggleDayActivity,
} from "./controller/activities";
import { getDayMoods, setMoodValue } from "./controller/mood";

app.whenReady().then(() => {
  ipcMain.handle("getCurrentDay", getCurrentDay);
  ipcMain.handle("getCategoriesForDay", getCategoriesForDay);
  ipcMain.on("toggleDayActivity", toggleDayActivity);
  ipcMain.handle("getDayMoods", getDayMoods);
  ipcMain.on("setMoodValue", setMoodValue);
});
