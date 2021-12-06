import { AllServicesService } from './../services/all-services.service';
import { Component, OnInit } from '@angular/core';
import stockData from '../services/data'
@Component({
    selector: 'app-invesco',
    templateUrl: './invesco.component.html',
    styleUrls: ['./invesco.component.scss']
})
export class InvescoComponent implements OnInit {
    symbols: Array<string> = {} as Array<string>;
    stocks: any;
    currentDate = new Date();
    constructor(private service: AllServicesService) {
        this.symbols = this.service.getStockSymbols();
    }

    ngOnInit(): void {
        this.service.loadData(this.symbols).subscribe(data => {
            this.stocks = data.data;
            console.log(data.data);
        }, err => {
            this.stocks = stockData.data;
        })
    }
    isNegative() {
        return this.stocks.close > this.stocks.open ? false : true;
    }
}
