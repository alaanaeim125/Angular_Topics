import { ProductDetailsComponent } from './components/share_data/product-details/product-details.component';
import { ProductsListComponent } from './components/share_data/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ProductsListComponent },
  {path:'products/:userid', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
