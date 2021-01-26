import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AddBreakage } from '../_models/AddBreakage';
import { GetTest } from '../_models/GetTest';

@Injectable({
  providedIn: 'root'
})
export class BreakagesService {
  baseUrl = environment.apiUrl;
  
  constructor(private http: HttpClient) { }

  addBreakage(newBreakage: AddBreakage) {
    return this.http.post<GetTest>(this.baseUrl + 'breakages', newBreakage);
  }
}
