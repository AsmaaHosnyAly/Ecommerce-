import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent} from './product/product.component';
import { ProductDetailsComponent} from './product-details/product-details.component';
import{NotFoundComponent} from './not-found/not-found.component';
import{AuthGuard} from './auth.guard'


const routes: Routes =
[
  {
   path:'',component: ProductListComponent
  },
  {
   path:'Shoping',component: ProductListComponent
  },
  {
   path:'Product-details/:id',component:ProductDetailsComponent,
   canActivate:[AuthGuard]
  },
  {
   path:'**',component:NotFoundComponent
  }
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
