import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AllServicesService {
    baseUrl: string = environment.apiUrl
    symbols: Array<string> = [
        'BNGO',
        'AAPL',
        'INTC',
        'GEVO',
        'AAL'
    ];
    constructor(private http: HttpClient) { }
    getStockSymbols() {
        return this.symbols.slice();
    }
    loadData(symbols: Array<string>) {
        return this.http.get<any>(this.baseUrl + '?access_key=605e4e646e90f7966a777352605567d0&symbols=' + symbols.join() + '&limit=5').pipe(
            catchError((err: any): any => {
                console.log(err)
            }),
        );
    }
    loadNewsData() {
        return this.http.get<any>("http://api.mediastack.com/v1/news?access_key=8e9b0dc503269eaeee4c1c8a49333593&countries=us,au").pipe(
            catchError((err: any): any => {
                console.log(err)
            }),
        );
    }
}
