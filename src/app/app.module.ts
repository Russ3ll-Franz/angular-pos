import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewuserComponent } from './newuser/newuser.component';
import { LoginComponent } from './newuser/login/login.component';
import { SignupComponent } from './newuser/signup/signup.component';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { SidebarComponent } from './auth-user/sidebar/sidebar.component';
import { HeaderComponent } from './auth-user/header/header.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CreateBillComponent } from './auth-user/create-bill/create-bill.component';
import { InventoryComponent } from './auth-user/inventory/inventory.component';
import { AddProductComponent } from './auth-user/add-product/add-product.component';
import { EditProductComponent } from './auth-user/edit-product/edit-product.component';

const appRoutes:Routes = [
  {path: 'home', component: AuthUserComponent, children: [
    {path: 'create-bill', component: CreateBillComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'edit-product/:id', component: EditProductComponent},
    {path: 'inventory', component: InventoryComponent}
  ]},
  {path: 'login', component: LoginComponent },
  {path: 'signup', component: SignupComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NewuserComponent,
    AuthUserComponent,
    SidebarComponent,
    HeaderComponent,
    CreateBillComponent,
    InventoryComponent,
    AddProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
