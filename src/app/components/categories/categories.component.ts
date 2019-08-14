import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {CategoryModel}  from '../../models/category.model'

@Component(
    {
    selector : 'categories',
    styleUrls : ['../categories/categories.component.scss'],
    templateUrl: '../categories/categories.component.html'
    }
)

export class CategoriesComponent implements OnInit{
 categories : CategoryModel[];
 constructor(private route : ActivatedRoute){}
 ngOnInit() : void {
 this.route.data.subscribe(routeData =>{
     let data = routeData['data'];
     if (data){
         this.categories = data.categories
     }
 })
 }
}
