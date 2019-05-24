import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { genericInitializations } from '../shared/constants/generic-initializations.constant';

import { catchError, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };      // JSON content type

  constructor(
    private http: HttpClient
    ) { }

  public get(req: string, timeOut: number = genericInitializations.apiResponseTimeout): Observable<any> {
    return this.http.get(req).pipe(
      timeout(timeOut),
      catchError((error: any) => {
        const err = error || { message: 'Connection Error' };
        return throwError(err);
      })
    );
  }

  public post(req: string, body: any, timeOut: number = genericInitializations.apiResponseTimeout): Observable<any> {
    return this.http.post(req, body, this.headers).pipe(
      timeout(timeOut),
      catchError((error: any) => {
        const err = error || { message: 'Connection Error' };
        return throwError(err);
      })
    );
  }

}
