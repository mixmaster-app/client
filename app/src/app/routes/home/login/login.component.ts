import { Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import UserAccount from "@entity/launcher/user-account";
import Server from "@entity/launcher/server";
import Launcher from "@entity/launcher/launcher";
import { createDefaultServer } from "@services/builder/ServerBuilder";
import { createDefaultLauncher } from "@services/builder/LauncherBuilder";
import { connect } from "@services/authenticate";

@Component({
    selector: 'login',
    imports: [
        /* Angular */
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        /* Primeng */
        FloatLabelModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        InputGroupModule,
        InputGroupAddonModule
    ],
    templateUrl: 'login.component.html',
    styleUrl: 'login.component.css'
})
export class LoginComponent {
    username: string = "";
    password: string = "";
    error: boolean = false;

    constructor() {
        
    }

    login() {
        if(!this.username) {
            this.error = true;
        }
        if(!this.password) {
            this.error = true;
        }
        var user: UserAccount = new UserAccount(this.username, this.password);
        var server: Server = createDefaultServer();
        var launcher: Launcher = createDefaultLauncher();
        
        connect(user, server, launcher);
    }
}
