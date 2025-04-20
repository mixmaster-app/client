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

    getNavbarTitle() {
        return `${this.title}${this.version != '' ? ` ${this.version}` : ''}`;
    }
}
