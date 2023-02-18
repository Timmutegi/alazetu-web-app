import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForgotPasswordComponent } from "src/app/components/forgot-password/forgot-password.component";
import { LoginComponent } from "../authentication/components/login/login.component";
import { SignUpComponent } from "../authentication/components/sign-up/sign-up.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'create-account', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class AuthenticationRoutingModule { }