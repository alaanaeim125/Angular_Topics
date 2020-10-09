import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/share_data/products-list/products-list.component';
import { ProductsComponent } from './components/share_data/products/products.component';
import { ProductDetailsComponent } from './components/share_data/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
