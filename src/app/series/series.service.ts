import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private apiUrl: string = environment.baseUrl + 'series';

  constructor(private http: HttpClient) {}

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  darPromedio(series: Serie[]): number {
    let promedio: number = 0;
    for (let index = 0; index < series.length; index++) {
      promedio += series[index].seasons;
    }
    promedio = promedio / series.length;
    return promedio;
  }
}
