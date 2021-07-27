import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fortexhome',
  templateUrl: './fortexhome.component.html',
  styles: [
  ]
})
export class FortexhomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnLoginClick(){
    this.router.navigate(['/user/login']);
  }

  OnAdminLoginClick(){
    this.router.navigate(['admin-login']);
  }

}
