import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../shared/converter.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-converter',
  templateUrl: './currency-converter.component.html',
  styles: [
  ]
})
export class CurrencyConverterComponent implements OnInit {

  data: Array<any>
  selectedValue: any;
  currentCurrency: any = '';
  public convertconverterForm!: FormGroup;
 
  constructor(public service: ConverterService, private FB: FormBuilder,private router: Router) {
    this.data = new Array<any>()
  }
 
  ngOnInit(): void {
    this.selectedValue = '';
    this.convertconverterForm = this.FB.group({
      fromCurrency: ['', Validators.required],
      toCurrency: ['', Validators.required],
      amount: ['', Validators.required],
      convertedAmounted: [0]
    })
  }
 
  onSubmit(data: any) {
if(data.fromCurrency && data.toCurrency && data.amount){
  this.service.postConverter(data).subscribe(
    data => {
      this.selectedValue = data;
      this.convertconverterForm.patchValue({
        convertedAmounted: this.selectedValue.convertedAmounted,
        fromCurrency: this.selectedValue.fromCurrency,
        toCurrency: this.selectedValue.toCurrency,
      })
    })
}
  }

  onSubmit2() {
    this.router.navigateByUrl('transaction-data');
  }
}
