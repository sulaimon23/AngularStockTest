import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../services/all-services.service';
import newsData from '../services/newsData'
@Component({
    selector: 'app-market',
    templateUrl: './market.component.html',
    styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {
    blogData: Array<any> = [] as Array<any>
    constructor(private allSvc: AllServicesService) { }

    ngOnInit(): void {
        this.allSvc.loadNewsData().subscribe(data => {
            console.log(data.data.data)
            this.blogData = data.data
        }, error => {
            this.blogData = newsData
        })
    }

}
