import { Component } from '@angular/core';
import { APP_CONFIG } from '@env/environment';
import { Title } from '@angular/platform-browser'

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrl: 'app.component.css',
    standalone: false
})
export class AppComponent {
    
    protected title = 'Mixmaster Client';

    constructor(private titleService:Title) {
        console.log(APP_CONFIG);
        this.titleService.setTitle(this.title);
    }
}
