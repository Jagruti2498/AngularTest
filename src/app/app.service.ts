import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TemperatureLog } from './TemperatureLog';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';




@Injectable()
export class ApiService {
  apiUrl = 'http://novius-railtech.com/Msruservice/api/tblTemperatureLog/SelectTemperatureLog';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'X-ClientId':'MSRU_Malda',
    })};

    constructor(private httpClient: HttpClient){}

  public getTemperatureLog(): Observable<TemperatureLog[]> {

     return this.httpClient.post<TemperatureLog[]>(this.apiUrl, {IntTrainId:406}, this.httpOptions);

  }

}
