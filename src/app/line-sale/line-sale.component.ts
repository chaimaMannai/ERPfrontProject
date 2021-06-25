import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LineSaleEntity } from 'app/models/line-sale-entity';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { LineSaleService } from 'app/services/line-sale.service';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';

@Component({
  selector: 'app-line-sale',
  templateUrl: './line-sale.component.html',
  styleUrls: ['./line-sale.component.css']
})
export class LineSaleComponent implements OnInit {
  lineSales : LineSaleEntity[];
  orderSales :OrderSaleEntity[];
  id : number;
  displayedColumns: string[] = ['Qt','description', 'orderSale','product','actions'];
  actionDisabled=false;

  constructor(private orderSaleService :OrderSaleServiceService, private lineSaleService :LineSaleService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(e=>{
      this.id=e['number'];
      this.orderSaleService.getOrderSaleById(this.id).subscribe((e : any) =>
        {
        this.actionDisabled=e.valid;
       
      })
      this.getLinesSales(e['number'])
    })
    //this.getLinesSales(this.id);
  }
  


  getLinesSales(id)
  {
    console.log("dada");
    //console.log(this.id)
    this.orderSaleService.getLinesSalesForOrderSale(id).subscribe(e=>{
    
    this.lineSales=e;
    console.log("dadou");
    console.log(e);




    }

    )
  }

  
  getValidOrderSale(){
    this.orderSaleService.getValidOrdersale(this.id).subscribe( data => {
      console.log(data)
      console.log("7895")
      this.router.navigate(['/Order-Sale']);
     
    
    })
    

  }
  
  
  deleteOrdersaleNonValid()
  {
    console.log("germany")
    this.orderSaleService.deleteOrderSale(this.id).subscribe( data => {
      console.log(data)
      console.log("550")
      this.router.navigate(['/Order-Sale']);
    
    })
  }


  deleteLineSale(id :number)
  {
   this.lineSaleService.deleteLineSale(id).subscribe( data => {
    console.log(data)
    console.log("550")
    this.getLinesSales(this.id);
  })
  }

  redirecttoline(){
    this.router.navigate(['/addLineSale',this.id]);
  }
  

 

}
