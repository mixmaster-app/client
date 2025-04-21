// import { exec } from "child_process";

const { ipcRenderer, contextBridge } = require("electron")

contextBridge.exposeInMainWorld(
    "versions", {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron
    }
);

contextBridge.exposeInMainWorld(
    "actions", {
        close: () => ipcRenderer.send("close-app", true),
        minimize: () => ipcRenderer.send("minimize-app", true),
        maximize: () => ipcRenderer.send("maximize-app", true),
    }
)

// contextBridge.exposeInMainWorld(
//     "launcher", {
//         connect: (username: string, password: string) => {
//             exec("echo 'hello world!'");
//         }
//     }
// )
