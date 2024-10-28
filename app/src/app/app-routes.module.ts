import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutesModule } from './routes/home/home-routes.module';
import { HenchListRoutesModule } from './routes/hench/list/hench-list-routes.module';

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
        HomeRoutesModule,
        HenchListRoutesModule,
    ],
    exports: [RouterModule],
})
export class AppRoutesModule {}
