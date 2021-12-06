import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvescoComponent } from './invesco/invesco.component';
import { MarketComponent } from './market/market.component';

const routes: Routes = [
    {
        path: "", component: InvescoComponent
    },
    {
        path: "market", component: MarketComponent
    },
    {
        path: '**',
        redirectTo: ''
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
