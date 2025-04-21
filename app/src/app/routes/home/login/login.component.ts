import { Component } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import UserAccount from "@entity/launcher/user-account";
import { createDefaultServer } from "@services/builder/ServerBuilder";
import Server from "@entity/launcher/server";
import Launcher from "@entity/launcher/launcher";
import { createDefaultLauncher } from "@services/builder/LauncherBuilder";
import { connect } from "@services/authenticate";
import { ButtonModule } from "primeng/button";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'login',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ButtonModule,
        FormsModule
    ],
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css',
})
export class LoginComponent {
    value1: string | undefined;
    username: FormControl = new FormControl('');
    password: FormControl = new FormControl('');

    login() {
        var user: UserAccount = new UserAccount(this.username.value, this.password.value);
        var server: Server = createDefaultServer();
        var launcher: Launcher = createDefaultLauncher();
        
        connect(user, server, launcher);
    }
}
