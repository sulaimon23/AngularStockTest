import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarketComponent } from './market/market.component';
import { InvescoComponent } from './invesco/invesco.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon'
import { CommonModule } from '@angular/common';
import { DateAgoPipe } from './pipes/date-ago.pipe';


@NgModule({
    declarations: [
        AppComponent,
        MarketComponent,
        InvescoComponent,
        DateAgoPipe,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        MatIconModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
