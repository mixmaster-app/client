import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { HomeRoutesModule } from '../home/home-routes.module';

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {}),
        HomeRoutesModule
    ],
    exports: [RouterModule],
})
export class AppRoutesModule {}
