import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrder } from 'app/model/purchase-order';
import { LineBuyEntity } from 'app/models/line-buy-entity';
import { LineBuyService } from 'app/services/line-buy.service';
import { PurchaseOrderServiceService } from 'app/services/purchase-order-service.service';

@Component({
  selector: 'app-lines-buys',
  templateUrl: './lines-buys.component.html',
  styleUrls: ['./lines-buys.component.css']
})
export class LinesBuysComponent implements OnInit {
  lineBuys : LineBuyEntity[];
  Purchaseorder :PurchaseOrder[];
  id : number;
  displayedColumns: string[] = ['Qt','description', 'PurchaseOrder','product','actions'];
  actionDisabled=false;

  constructor(private purchaseorderService :PurchaseOrderServiceService,private lineBuyService:LineBuyService,private router: Router,private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(e=>{
      this.id=e['number'];
      this.purchaseorderService.getPurchaseOrdeById(this.id).subscribe((e : any) =>
        {
        this.actionDisabled=e.valid;
       
      })
      this.getLinesSales(e['number'])
    })
  }

  getLinesSales(id)
  {
    console.log("dada");
    //console.log(this.id)
    this.purchaseorderService.getLinesBuysForPurchaseOrder(id).subscribe(e=>{
    
    this.lineBuys=e;
    console.log("dadou");
    console.log(e);




    }

    )
  }

  getValidPurchaseOrder(){
    this.purchaseorderService.getValidPurchaseOrder(this.id).subscribe( data => {
      console.log(data)
      console.log("7895")
      this.router.navigate(['/Purchase-Order']);
     
    
    })
    

  }
  
  
  deleteOrdersaleNonValid()
  {
    console.log("germany")
    this.purchaseorderService.deletePurchaseOrder(this.id).subscribe( data => {
      console.log(data)
      console.log("550")
      this.router.navigate(['/Purchase-Order']);
    
    })
  }

  deleteLineBuy(id :number)
  {
   this.lineBuyService.deleteLineBuy(id).subscribe( data => {
    console.log(data)
    console.log("550")
    this.getLinesSales(this.id);
  })
  }


  redirecttoline(){
    this.router.navigate(['/addLineBuy',this.id]);
  }


}
