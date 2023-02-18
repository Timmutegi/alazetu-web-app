import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/auth/auth.guard";
import { AboutComponent } from "src/app/components/about/about.component";
import { AccountComponent } from "src/app/components/account/account.component";
import { CartComponent } from "src/app/components/cart/cart.component";
import { CheckoutComponent } from "src/app/components/checkout/checkout.component";
import { ForgotPasswordComponent } from "src/app/components/forgot-password/forgot-password.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { ManageAccountComponent } from "src/app/components/manage-account/manage-account.component";
import { ProductDetailComponent } from "src/app/components/product-detail/product-detail.component";
import { ShopComponent } from "src/app/components/shop/shop.component";
import { LoginComponent } from "../authentication/components/login/login.component";
import { SignUpComponent } from "../authentication/components/sign-up/sign-up.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'about-us', component: AboutComponent },
    { path: 'my-account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'create-account', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
    { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'manage-account', component: ManageAccountComponent, canActivate: [AuthGuard] },
    { path: 'product/:ID', component: ProductDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class SharedRoutingModule { }