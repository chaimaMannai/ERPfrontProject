//import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
//import { CategoryEntity } from 'app/models/category-entity.model';
import { ProductEntity } from 'app/models/product-entity.model';
//import { CategoryService } from 'app/productService/category.service';
import { ProductServiceService } from 'app/productService/product-service.service';
import { Location } from '@angular/common';

import { element } from 'protractor';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductServiceService]
})


export class ProductsComponent implements OnInit {
  
  productForm = new FormGroup({}); //--> definition formulaire

  //les chapms du formulaire
  product: string[] = [
    "name",
    "description",
    "priceVente",
    "priceAchat",
    "quantite",
    "actions",
    "category",
   
  ];

  // affichage 
  displayedColumns: string[] = ['name', 'description' ,'priceVente','priceAchat','quantite',"category","actions"];
  showForm: boolean;
  //categories: CategoryEntity[];
  //selectedCategory: CategoryEntity;
  isUpdate: boolean; 
  itemToUpdate: number;

  constructor(private productServiceService : ProductServiceService) {}
  products :ProductEntity [] ; 
  ngOnInit(): void { // methode va declancher lors l'ecution du composant
  this.showForm = false
    
   
 /* this.categoryService.getCategories().subscribe(e=>{
    this.categories=e
  })*/




    this.productServiceService.getProduct().subscribe(e=>{
this.products=e






    })
    

   
  }

  saveProduct()
  {
    let productForSave = new ProductEntity()
    productForSave.name = this.productForm.controls["name"].value
    productForSave.description = this.productForm.controls["description"].value
    productForSave.priceVente = this.productForm.controls["priceVente"].value
    productForSave.priceAchat = this.productForm.controls["priceAchat"].value
    productForSave.quantite = this.productForm.controls["quantite"].value
    productForSave.category = this.productForm.controls["category"].value
    //console.log(this.productForm.controls["category"].value)
    if(this.isUpdate)
    {
      this.productServiceService.updateProduct(this.itemToUpdate,productForSave).subscribe(e=>

        {
          this.ngOnInit()
        })
    }
    else{
    this.productServiceService.addProduct(productForSave).subscribe(e=>{
      

      this.ngOnInit()

    
    }
      )
  }
  }

  addEntry(element)
  
  {
    if(element !== null)
    {
      console.log(element)
      this.showForm=true
      this.isUpdate=true;
      this.itemToUpdate=element.id
      this.product.forEach(col => {
        this.productForm.addControl(col, new FormControl());
      
      });
      this.productForm.controls["name"].setValue(element.name)
      this.productForm.controls["description"].setValue(element.description)
      this.productForm.controls["priceVente"].setValue(element.priceVente)
      this.productForm.controls["priceAchat"].setValue(element.priceAchat)
      this.productForm.controls["quantite"].setValue(element.quantite)
      this.productForm.controls["category"].setValue(element.category)
    }
    else
    {
    this.productForm.reset()
    this.showForm = true
    this.isUpdate=false;
    this.product.forEach(col => {
      this.productForm.addControl(col, new FormControl());
    
    });
  }
}

  deleteProduct(item)
{
console.log("item")
console.log(item)

this.productServiceService.deleteProduct(item.id).subscribe(e=>
  {
    console.log(e)
    this.ngOnInit()
  })
}



go()
 
  {
    this.showForm=false
  }

  
}
