import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from './app-routes.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModule,
        MatGridListModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
