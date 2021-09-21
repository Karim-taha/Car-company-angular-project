import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/API/all-products/all-products.component';
import { CreateProductComponent } from './components/API/create-product/create-product.component';
import { ProductDetailsComponent } from './components/API/product-details/product-details.component';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/order/parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  { path: 'product', component:ParentComponent},
  { path: 'myproduct', component:AllProductsComponent},
  { path: 'oneProduct/:pid', component:ProductDetailsComponent},
  { path: 'createProduct', component:CreateProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
