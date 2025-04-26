import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        LoginComponent,
        CommonModule,
        ButtonModule
    ],
    bootstrap: [HomeComponent],
})
export class HomeModule {}
