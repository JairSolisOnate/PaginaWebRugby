import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { isObservable, Observable } from "rxjs";

const url_Clubrugby='../assents/DATA/ClubRugby.json';

@Injectable({
    providedIn: 'root'
})

export class ClubrugbyService {

    constructor(private http: HttpClient) {}
    GetAll(){
        return this.http.get(url_Clubrugby)
    }
}