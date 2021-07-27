import { Injectable } from '@angular/core';
import { TransactionDetail } from './transaction-detail.model';
import { HttpClient } from '@angular/common/http'
 
@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {
  constructor(private http:HttpClient) { }
  
 
  readonly baseURI='http://localhost:16543/api/TransactionDetails'
 
 formData : TransactionDetail = new TransactionDetail();
 list: TransactionDetail[];
 
 postTransactionDetail()
 {
  return this.http.post(this.baseURI,this.formData)
 }
}