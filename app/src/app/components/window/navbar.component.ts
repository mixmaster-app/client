import { Component, Input } from '@angular/core';

@Component({
    selector: 'window-navbar',
    standalone: true,
    templateUrl: 'navbar.component.html',
    styleUrl: 'navbar.component.css'
})
export class WindowNavbarComponent {

    @Input() title: string = "";
    @Input() version: string = "";

    close() {
        if(!window.actions) return;
        window.actions.close();
    }

    minimize() {
        if(!window.actions) return;
        window.actions.minimize();
    }

    maximize() {
        if(!window.actions) return;
        window.actions.maximize();
    }

}
