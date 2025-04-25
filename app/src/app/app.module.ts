import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';

import { AppRoutesModule } from './app-routes.module';

import { WindowNavbarComponent } from './components/window/navbar.component';
import { WindowSidebarComponent } from './components/window/sidebar.component';
import { HomeModule } from './routes/home/home.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        /* Application modules */
        HomeModule,
        /* --- */
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModule,
        WindowNavbarComponent,
        WindowSidebarComponent,
    ],
    providers: [
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Lara,
                options: {
                    prefix: 'p',
                    darkModeSelector: 'none',
                    cssLayer: false
                }
            }
        })
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
