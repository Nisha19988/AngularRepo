import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-transaction-data',
  templateUrl: './transaction-data.component.html',
  styles: [
  ]
})
export class TransactionDataComponent implements OnInit {
  form!: FormGroup;
  transaction_data_: any;

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      user_Id: ['', Validators.required],
      sender_BankName: ['', Validators.required],
      sender_AccNo: ['', Validators.required],
      // recipient_Name: ['', Validators.required],
      // recipient_AccNo: ['', Validators.required],
      transaction_Date: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    this.transaction_data_ = this.form.value;
    localStorage.setItem('transaction',JSON.stringify(this.transaction_data_));
    this.router.navigateByUrl('transaction-details');
  }

}
