import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LoginComponent } from './components/login.component';

@NgModule({
    declarations: [HomeComponent],
    imports: [LoginComponent],
    bootstrap: [HomeComponent],
})
export class HomeModule {}
