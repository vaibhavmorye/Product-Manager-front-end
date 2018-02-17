import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class ProductService{

    //private _produtURL = 'http://localhost:8080/api';
    private _produtURL = './api/products/products.json';

   constructor(private _http: HttpClient){
    }

    getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this._produtURL)
        .do(data=> console.log('All'+ JSON.stringify(data)))
        .catch(this.handleError);
    }
 
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message); 
    }
}