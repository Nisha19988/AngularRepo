import { Injectable } from '@angular/core';
import { Converter } from './converter.model';
 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ConverterService {
 
  constructor(private http:HttpClient) { }
  readonly baseURI='http://localhost:16543/api/Calculations'
 
  formData : Converter = new Converter();
   
  postConverter(data:any)
  {
   return this.http.post(this.baseURI,data)
  }
getconverter():Observable<any>
{
  
 return this.http.get<any>(this.baseURI)
 //return this.http.get(this.baseURI).toPromise().then(response=>response=response.json().items) tush
 
}
 
}
