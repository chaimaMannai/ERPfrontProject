import { ɵBrowserPlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-sale',
  templateUrl: './order-sale.component.html',
  styleUrls: ['./order-sale.component.css']
})
export class OrderSaleComponent implements OnInit {

  orderSales : OrderSaleEntity [] ;
  displayedColumns: string[] = ['number','date', 'totalPrice','customer','invoice','valid','actions'];
 
  

 

  constructor(private orderSaleService :OrderSaleServiceService,private router:Router) { }

  ngOnInit(): void {
    this.getOrderSales();
    
  }
  private getOrderSales()
  {
    console.log("salut");
   this.orderSaleService.getOrderSalesList().subscribe(e =>{
    this.orderSales=e
    console.log("yamamamamamamamamamama")
    console.log(e)
   })
  }

  
  deleteOrderSale(number: number)
  {
    console.log("520")
    this.orderSaleService.deleteOrderSale(number).subscribe( data => {
      console.log("550")
      this.getOrderSales();
    })
  }
  
redirecttoline(number){
  this.router.navigate(['/linesSales/', number]);
}
}
