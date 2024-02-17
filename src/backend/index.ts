import { app, ipcMain } from "electron";
import { getCurrentDay } from "./controller/day";

app.whenReady().then(() => {
  ipcMain.handle("getCurrentDay", getCurrentDay);
});
