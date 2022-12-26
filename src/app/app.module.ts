import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {HomeComponent} from "./page/home/home.component";
import {CategoryComponent} from "./page/category/category.component";
import { ProductComponent } from './page/product/product.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './page/login/login.component';
import { RegistroComponent } from './page/registro/registro.component';
import {HttpClientModule} from "@angular/common/http";
import {SearchComponent} from "./search/search.component";
import {FormsModule} from "@angular/forms";
import {BookComponent} from "../online selling/book/book.component";
import {KiemtraComponent} from "../online selling/kiemtra/kiemtra.component";

//1. khai bao danh sach cac routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'category', component: CategoryComponent},
  { path: 'product/:id', component: ProductComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistroComponent},
  { path: 'search', component: SearchComponent},
  { path: 'book', component: BookComponent},
  { path: 'kiemtra', component: KiemtraComponent},

]
@NgModule({
  declarations: [
    AppComponent,StudentComponent,ClassesComponent,
    HomeComponent,CategoryComponent, ProductComponent, LoginComponent, RegistroComponent,
    SearchComponent,BookComponent,KiemtraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
