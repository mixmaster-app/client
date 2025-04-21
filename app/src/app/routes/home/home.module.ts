import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [LoginComponent, CommonModule],
    bootstrap: [HomeComponent],
})
export class HomeModule {}
