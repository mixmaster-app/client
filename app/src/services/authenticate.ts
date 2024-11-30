import userAccount from "../entity/launcher/user-account";
import Server from "../entity/launcher/server";
import Launcher from "../entity/launcher/launcher";
// import { exec, ExecException } from "child_process";

function connect(account: userAccount, server: Server, launcher : Launcher): void {

    const connectCommand = `cd /d "${launcher.getPath()}" && start ${launcher.getName()} 4.644700 ${server.getIp()} ${server.getPort()} ${launcher.isFullScreen() ? "1" : "0"} ${account.getUsername()} ${account.getPassword()} 0 SEEDC`;

    console.log(connectCommand);
    // exec(connectCommand, (err: ExecException | null) => {
    //     if (err) {
    //         console.log(`Error while launching Mixmaster ${err.message}`);
    //     }
    // });
}

export {
    connect
}
