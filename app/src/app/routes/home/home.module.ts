import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [HomeComponent],
    imports: [LoginComponent, CommonModule],
    bootstrap: [HomeComponent],
})
export class HomeModule {}
