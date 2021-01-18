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

  //Sample Data because api URL was not working
  public getSampleData() {
    const sampleData=[{ "IntAxleNo" : 24 ,"IntCoachPosition" : 1 ,"DecTs1" : 26.4000 ,"DecTs2" : 25.0000 , },
      {"IntAxleNo" : 25 ,"IntCoachPosition" : 1 ,"DecTs1" : 26.3000 ,"DecTs2" : 25.4000 ,},
      {"IntAxleNo" : 26 ,"IntCoachPosition" : 2 ,"DecTs1" : 26.4000 ,"DecTs2" : 25.0000 ,},
      {"IntAxleNo" : 27 ,"IntCoachPosition" : 2 ,"DecTs1" : 26.3000 ,"DecTs2" : 25.4000 ,},
      {"IntAxleNo" : 27 ,"IntCoachPosition" : 2 ,"DecTs1" : 26.3000 ,"DecTs2" : 25.4000 ,},
      {"IntAxleNo" : 27 ,"IntCoachPosition" : 3 ,"DecTs1" : 26.3000 ,"DecTs2" : 25.4000 ,},
      {"IntAxleNo" : 27 ,"IntCoachPosition" : 3 ,"DecTs1" : 26.3000 ,"DecTs2" : 25.4000 ,}
    ];
      return sampleData;
  }


}
