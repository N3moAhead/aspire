import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("dayController", {
  getCurrentDay: () => ipcRenderer.invoke("getCurrentDay"),
});
