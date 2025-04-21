import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
