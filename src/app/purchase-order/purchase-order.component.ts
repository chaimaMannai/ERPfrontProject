import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrder } from 'app/model/purchase-order';
import { PurchaseOrderServiceService } from 'app/services/purchase-order-service.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  purchaseOrder : PurchaseOrder [] ;
  displayedColumns: string[] = ['number','date', 'totalPrice','provider','invoice','valid','actions'];

  constructor(private purchaseOrderService : PurchaseOrderServiceService ,private router:Router) { }

  ngOnInit(): void {
    this.getPurchaseList();
  }

  getPurchaseList()
  {
    this.purchaseOrderService.getPurchaseOrderList().subscribe(data =>{
      this.purchaseOrder=data
      console.log("yamamamamamamamamamama")
      console.log(data)
     })
  }

  deletePurchaseOrder(number : number)
  {
    this.purchaseOrderService.deletePurchaseOrder(number).subscribe( data => {
      this.getPurchaseList();
    })
  }

  redirecttoline(number){
    this.router.navigate(['/linesBuys/', number]);
  }

}
