import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import {FortexhomeComponent} from './fortexhome/fortexhome.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {CurrencyConverterComponent} from "./currency-converter/currency-converter.component";
import {CurrencyUpdateComponent} from './currency-update/currency-update.component';
import {CurrencyUpdateFormComponent} from './currency-update/currency-update-form/currency-update-form.component';

import {TransactionDetailComponent} from "./transaction-detail/transaction-detail.component";
import {TransactionDetailsComponent} from "./transaction-details/transaction-details.component";
import {TransactionDataComponent} from "./transaction-data/transaction-data.component";
import {TransHistoryComponent} from "./trans-history/trans-history.component";

const routes: Routes = [
  {path:'',redirectTo:'/fortexhome',pathMatch:'full'},
  {path:'fortexhome',component: FortexhomeComponent},
  {
    path:'user', component: UserComponent,
    children: [
    {path: 'registration',component: RegistrationComponent},
    {path: 'login',component: LoginComponent}
  ]},
  {path:'home',component: HomeComponent, canActivate:[AuthGuard]},
  {path:'admin-login',component: AdminLoginComponent},
  {path:'admin-dashboard',component: AdminDashboardComponent},

  {path:'currency-update', component : CurrencyUpdateComponent,
  children: [
    {path: 'currency-update-form', component : CurrencyUpdateFormComponent}
  ]},
  {path : 'currency-converter', component : CurrencyConverterComponent},
  {path : 'transaction-details', component : TransactionDetailsComponent},
  {path : 'transaction-data', component : TransactionDataComponent},
  {path : 'trans-history', component : TransHistoryComponent},
  {path : 'transaction-detail', component : TransactionDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
