import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from "@angular/forms"
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FortexhomeComponent } from './fortexhome/fortexhome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CurrencyUpdateComponent } from './currency-update/currency-update.component';
import { CurrencyUpdateFormComponent } from './currency-update/currency-update-form/currency-update-form.component';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';
import { TransactionDataComponent } from './transaction-data/transaction-data.component';
import { TransHistoryComponent } from './trans-history/trans-history.component';
import { OnlyCharactersDirective } from './only-characters.directive';
import { OnlyNumbersDirective } from './only-numbers.directive';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    FortexhomeComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    CurrencyUpdateComponent,
    CurrencyUpdateFormComponent,
    CurrencyConverterComponent,
    TransactionDetailsComponent,
    TransactionDataComponent,
    TransHistoryComponent,
    OnlyCharactersDirective,
    OnlyNumbersDirective,
    TransactionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
