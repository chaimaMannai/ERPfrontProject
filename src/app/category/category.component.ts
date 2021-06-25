import { Component, OnInit } from '@angular/core';
import { ProductEntity } from 'app/models/product-entity.model';
import { ProductServiceService } from 'app/productService/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  product: string[] = [
    "name",
    "quantite",
    "category",
   
  ];

  // affichage 
  displayedColumns: string[] = ['name',"category",'quantite'];

  constructor(private productServiceService : ProductServiceService) { }
  products :ProductEntity [] ; 
  ngOnInit(): void {
    this.productServiceService.getProduct().subscribe(e=>{
      this.products=e
      
      
      
      
      
      
          })
          
      
         
        }

   
  

 

  

}
