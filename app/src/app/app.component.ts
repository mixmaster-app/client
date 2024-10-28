import { Component } from '@angular/core';
import { APP_CONFIG } from './../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    constructor() {
        console.log(APP_CONFIG);
    }
    title = 'mixmaster-client';
    sidebarVisible: boolean = false;
}
