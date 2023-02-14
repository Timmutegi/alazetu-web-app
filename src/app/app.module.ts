import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ManageAccountComponent } from './components/manage-account/manage-account.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShopComponent,
    AboutComponent,
    AccountComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    ProductDetailComponent,
    CartItemComponent,
    CheckoutComponent,
    ManageAccountComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
