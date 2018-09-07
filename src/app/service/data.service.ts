import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import {data} from '../domain/data';



@Injectable()
export class dataService {
    constructor(
        private httpc: HttpClient) { }

       getdata(){
        return this.httpc.get<data>('../../assets/data.json');
       }
}
