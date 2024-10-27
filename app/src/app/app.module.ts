import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from "./app-routes.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
