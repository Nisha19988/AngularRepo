import { Directive, ElementRef, HostListener } from '@angular/core';
 
@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
 
  //private regex:RegExp=new RegExp('^[0-9]*$');
  private specialKeys: Array<String>=['Backspace','ArrowLeft','ArrowRight'];
  private regex:RegExp=new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
 
  constructor(private elementRef:ElementRef) { }
  /**
   * keyboard action
  * @param event
  */
 @HostListener('keydown',['$event']) onKeyDown(event:KeyboardEvent)
 {
   
   if(this.specialKeys.indexOf(event.key)!==-1)
   {
     return;
   }
   const inputValue:string=this.elementRef.nativeElement.value.concat(event.key);
   
   if(inputValue && ! String(inputValue).match(this.regex))
   {
    alert('Please Enter Valid Number');
     event.preventDefault();
   }
   else
   {
     
     return;
   }
   
 
 }
 /**
  * copy paste action
  * @param event
  */
 
 /*
 @HostListener('paste',['$event']) onPaste(event)
 {
   const clipboardData=(event.originalEvent || event).clipboardData.getData('text/plain');
   
   if(clipboardData)
   {
     const regEx=new RegExp('^[0-9]*$');
     if(!regEx.test(clipboardData))
     {
       event.preventDefault();
     }
 
   }
   return;
 }
*/
  
 
}