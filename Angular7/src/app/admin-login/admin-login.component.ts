import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styles: [
  ]
})
export class AdminLoginComponent implements OnInit {
  formModelAdmin={
    UserName : '',
    Password : ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(user:any, pass:any){
    if(user == "" && pass =="")
    {
      alert("Empty,Please fill username and password.")
      return
    }  
    if (user == "SuperAdmin" && pass == "1234")  
    {
      // alert("Logged In")//
      this.router.navigate([`${'admin-dashboard'}`])
    }
    else
    {
      alert("You does not exist")
    }
  }
}
