
// @Component({
//   selector: 'app-transaction-detail',
//   templateUrl: './transaction-detail.component.html',
//   styles: [
//   ]
// })
// export class TransactionDetailComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionDetailService } from 'src/app/shared/transaction-detail.service';
//import { ToastrService } from 'ngx-toastr';
import { TransactionDetail } from 'src/app/shared/transaction-detail.model';
 
@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: []
})
export class TransactionDetailComponent implements OnInit {
  constructor(public service:TransactionDetailService
   ) { }
 
  ngOnInit(): void {
  }
 
  onSubmit(form:NgForm)
  {
   if(this.service.formData.TransactionId == 0)
      this.insertRecord(form);
   // else
    //this.updateRecord(form);
  }
 
  insertRecord(form:NgForm)
  {
    this.service.postTransactionDetail().subscribe(
 
      res=>{
        this.resetForm(form);
       // this.service.refreshList();
       // this.toastr.success('New Currency Added','Managing Currency')
  
      },
      err =>{console.log(err);}
     );
  }
 
  
 
  resetForm( form :NgForm)
  {
     form.form.reset();
     this.service.formData =new TransactionDetail();
  }
 
}