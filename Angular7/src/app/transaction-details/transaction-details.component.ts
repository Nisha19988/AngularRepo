import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styles: [
  ]
})
export class TransactionDetailsComponent implements OnInit {

  getdata_:any;

  constructor() { }


    ngOnInit() {
      const json=localStorage.getItem('transaction')
      this.getdata_= JSON.parse(json || '{}');
    }

    download()
    {
      const  element=document.getElementById('table') as HTMLElement;
   
      html2canvas(element).then((canvas)=>{
   
        console.log(canvas)
        var imgData=canvas.toDataURL('image/png')
        var doc =new jsPDF
        var imgHeight=canvas.height*180/canvas.width;
        doc.addImage(imgData,0,0,180,imgHeight)
        doc.save("Report")
   
      }
      
      )
    }
  }


