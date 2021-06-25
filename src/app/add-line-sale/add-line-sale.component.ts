import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineSaleEntity } from 'app/models/line-sale-entity';
import { ProductServiceService } from 'app/productService/product-service.service';
import { LineSaleService } from 'app/services/line-sale.service';

@Component({
  selector: 'app-add-line-sale',
  templateUrl: './add-line-sale.component.html',
  styleUrls: ['./add-line-sale.component.css']
})
export class AddLineSaleComponent implements OnInit {
  filtredProduct;
  lineSale:LineSaleEntity={qt:0};
  quantite:number=0;
  id:number;

  constructor(private productService :ProductServiceService ,private lineService:LineSaleService,private router:Router,private activatedRoute:ActivatedRoute) { }

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
    this.lineService.addLineSale(this.lineSale, this.filtredProduct.id,this.id).subscribe( data =>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      console.log(data);
      this.goToList();
     
    },
    error => console.log(error)); 
    
  }
  
///////////////////////////////////////
  goToList()
  {
    this.router.navigate(['/linesSales',this.id])
  }


  onSubmit(){
  console.log("eeekkekkekekekekekekkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  
    
    
    this.lineSale.qt=this.quantite;

   
    //console.log(this.orderSale.invoice.number);
    //console.log(this.orderSale);

    this.saveProduct();
    console.log(this.lineSale);
  }


}
