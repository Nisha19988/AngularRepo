import { Component, OnInit } from '@angular/core';
import { CurrencyUpdateService } from 'src/app/shared/currency-update.service';
import { NgForm } from "@angular/forms";
import { CurrencyUpdate } from 'src/app/shared/currency-update.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-currency-update-form',
  templateUrl: './currency-update-form.component.html',
  styles: [
  ]
})
export class CurrencyUpdateFormComponent implements OnInit {

  constructor(public service:CurrencyUpdateService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm)
  {
   if(this.service.formData.currencyId == 0)
      this.insertRecord(form);
    else
    this.updateRecord(form);
  }
 
  insertRecord(form:NgForm)
  {
    this.service.postCurrencyUpdate().subscribe(
 
      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('New Currency Added','Managing Currency')
  
      },
      err =>{console.log(err);}
     );
  }

  updateRecord(form :NgForm)
  {
     
    this.service.putCurrencyUpdate().subscribe(

      res=>{
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Currency Updated','Managing Currency')
  
      },
      err =>{console.log(err);}
     );
  }

  resetForm( form :NgForm)
  {
     form.form.reset();
     this.service.formData =new CurrencyUpdate();
  }

}
