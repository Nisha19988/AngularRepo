import { Injectable } from '@angular/core';
import { CurrencyUpdate } from './currency-update.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CurrencyUpdateService {

  constructor(private http:HttpClient) { }

  readonly baseURI='http://localhost:16543/api/Currencies'

  formData : CurrencyUpdate = new CurrencyUpdate();
  list :CurrencyUpdate[];
  
  postCurrencyUpdate()
  {
   return this.http.post(this.baseURI,this.formData)
  }
  
  putCurrencyUpdate()
  {
   return this.http.put(`${this.baseURI}/${this.formData.currencyId}`,this.formData);
  }
  
  deleteCurrencyUpdate(id:number)
  {
   return this.http.delete(`${this.baseURI}/${id}`);
  }
  refreshList()
  {
    this.http.get(this.baseURI)
    .toPromise()
    .then(res => this.list=res as CurrencyUpdate[]);
  }




}