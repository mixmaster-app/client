const { exec } = require("node:child_process");
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

contextBridge.exposeInMainWorld(
    "host", {
        execute: (command) => {
            exec(command, (err, _, stderr) => {
                if(err) {
                    console.error(stderr);
                }
            });
        }
    }
)
