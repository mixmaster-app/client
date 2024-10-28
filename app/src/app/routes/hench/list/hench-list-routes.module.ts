import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HenchListComponent } from './hench-list.component';

const routes: Routes = [
    {
        path: 'hench/list',
        component: HenchListComponent,
    },
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HenchListRoutesModule {}