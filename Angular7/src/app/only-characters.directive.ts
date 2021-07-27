import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
import { Directive } from '@angular/core';
 
@Directive({
  selector: '[appOnlyCharacters]'
})
export class OnlyCharactersDirective {
 
private regex:RegExp=new RegExp(/^[A-Z ]*$/);
private specialKeys: Array<String>=['Backspace','ArrowLeft','ArrowRight','Shift','CapsLock','Tab'];
//private regex:RegExp=new RegExp(/^[0-9]+(\.[0-9]*){0,1}$/g);
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
  alert('Please Enter Currency Name in Capital Letters');
   event.preventDefault();
 }
 else
 { 
   return;
 }
} 
}
