import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { ProductsComponent } from './components/products/products.component';
import { ParentComponent } from './components/order/parent/parent.component';
import { ChildComponent } from './components/order/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './components/API/all-products/all-products.component';
import { ProductDetailsComponent } from './components/API/product-details/product-details.component';
import { CreateProductComponent } from './components/API/create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    ParentComponent,
    ChildComponent,
    AllProductsComponent,
    ProductDetailsComponent,
    CreateProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
