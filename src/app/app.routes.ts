import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoriesComponent} from '../app/components/categories/categories.component'
import {CategoriesResolver} from '../app/resolvers/category.resolver'

const routes: Routes = [{
  path: '',
  component: CategoriesComponent,
  resolve: {
    data: CategoriesResolver
  }
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      { useHash: false }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
