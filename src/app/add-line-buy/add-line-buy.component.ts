import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineBuyEntity } from 'app/models/line-buy-entity';
import { ProductServiceService } from 'app/productService/product-service.service';
import { LineBuyService } from 'app/services/line-buy.service';

@Component({
  selector: 'app-add-line-buy',
  templateUrl: './add-line-buy.component.html',
  styleUrls: ['./add-line-buy.component.css']
})
export class AddLineBuyComponent implements OnInit {
  filtredProduct;
  lineBuy:LineBuyEntity={qt:0};
  quantite:number=0;
  id:number;
  constructor(private productService :ProductServiceService ,private lineService:LineBuyService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(e=>{
      this.id=e['number'];
     
    })
  }


  searchProduct(subname) {
    console.log("wazgha")
    this.productService.getProductByUserName(subname).subscribe(
      (response) => {
        this.filtredProduct = response;
        console.log("wazghaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(this.filtredProduct)

      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveProduct()
  {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.lineService.addLineBuy(this.lineBuy, this.filtredProduct.id,this.id).subscribe( data =>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      console.log(data);
      this.goToList();
     
    },
    error => console.log(error)); 
    
  }
  
///////////////////////////////////////
  goToList()
  {
    this.router.navigate(['/linesBuys',this.id])
  }


  onSubmit(){
  console.log("eeekkekkekekekekekekkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  
    
    
    this.lineBuy.qt=this.quantite;

   
    //console.log(this.orderSale.invoice.number);
    //console.log(this.orderSale);

    this.saveProduct();
    console.log(this.lineBuy);
  }

}
