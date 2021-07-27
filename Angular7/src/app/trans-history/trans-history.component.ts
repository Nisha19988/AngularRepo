import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-trans-history',
  templateUrl: './trans-history.component.html',
  styles: [
  ]
})
export class TransHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
