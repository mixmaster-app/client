import { Component } from '@angular/core';

import { AppRoutesModule } from '../../app-routes.module';

@Component({
    selector: 'window-sidebar',
    standalone: true,
    templateUrl: 'sidebar.component.html',
    imports: [AppRoutesModule],
})
export class WindowSidebarComponent {}
