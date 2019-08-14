import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {CategoriesComponent} from '../app/components/categories/categories.component'
import {CategoriesService} from '../app/services/category.services'
import {CategoriesResolver} from '../app/resolvers/category.resolver'
import {SharedModule} from './shared/share.module'

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [CategoriesResolver, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
