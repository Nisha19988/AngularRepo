import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styles: [
  ]
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  OnCurrencyClick(){
    this.router.navigate(['currency-update']);
  }

  OnTransClick(){
    this.router.navigate(['trans-history']);
  }
}
