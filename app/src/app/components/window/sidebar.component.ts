import { Component } from '@angular/core';

import { AppRoutesModule } from '@app/app-routes.module';

@Component({
    selector: 'window-sidebar',
    standalone: true,
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.css',
    imports: [AppRoutesModule],
})
export class WindowSidebarComponent {}
