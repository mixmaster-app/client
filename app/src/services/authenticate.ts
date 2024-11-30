import { exec, ExecException } from "child_process";
import userAccount from "../entity/launcher/user-account";
import Server from "../entity/launcher/server";

function connect(account: userAccount, server: Server, options :{ fullScreen: 0|1 }): void {

    const connectCommand = `cd /d "${server.getLauncherPath()}" && start Mixmaster.exe 4.644700 ${server.getIp()} ${server.getPort()} ${options.fullScreen} ${account.getUsername()} ${account.getPassword()} 0 SEEDC`;

    exec(connectCommand, (err: ExecException | null) => {
        if (err) {
            console.log(`Error while launching Mixmaster ${err.message}`);
        }
    });
}

export {
    connect
}
