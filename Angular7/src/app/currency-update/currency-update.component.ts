import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CurrencyUpdate } from '../shared/currency-update.model';
import { CurrencyUpdateService } from '../shared/currency-update.service';

@Component({
  selector: 'app-currency-update',
  templateUrl: './currency-update.component.html',
  styles: [
  ]
})
export class CurrencyUpdateComponent implements OnInit {

  constructor(public service:CurrencyUpdateService,
    private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
    
  }



  populateForm(selectedRecord:CurrencyUpdate)
  {
         this.service.formData = Object.assign({},selectedRecord)  ;
  }

  onDelete(id:number)
  {

    if(confirm('Are You sure To delete this Record?'))
    {
       
      this.service.deleteCurrencyUpdate(id)
      .subscribe(
        res=>{
          this.service.refreshList();
          this.toastr.error("Deleted Successfull",'Managing Currency');
  
        },
        err=>{console.log(err);}
      )
    }

  }

}
