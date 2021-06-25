import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderModel } from 'app/model/provider-model';
import { PurchaseOrder } from 'app/model/purchase-order';
import { InvoiceEntity } from 'app/models/invoice-entity';
import { ProviderService } from 'app/service/provider.service';
import { PurchaseOrderServiceService } from 'app/services/purchase-order-service.service';

@Component({
  selector: 'app-create-purchase-order',
  templateUrl: './create-purchase-order.component.html',
  styleUrls: ['./create-purchase-order.component.css']
})
export class CreatePurchaseOrderComponent implements OnInit {
  filtredProvider : ProviderModel;
  invoiceNumber : number;
  purchaseOrder : PurchaseOrder;

  constructor(private providerService : ProviderService, private purchaseService : PurchaseOrderServiceService,private router : Router) { }

  ngOnInit(): void {
  }

  searchPerson(userName)
  {
    this.providerService.getProviderByUserName(userName).subscribe(
      (response) => {
        this.filtredProvider = response;
        
        console.log(this.filtredProvider)

      },
      (error) => {
        console.log(error);
      }
    );
  }

  savePurchaseOrder()
  {
    this.purchaseService.addPurchaseOrder(this.purchaseOrder,this.filtredProvider.id).subscribe( data =>{
      console.log(data);
     
    },
    error => console.log(error)); 

    this.goToList();
  }

  goToList()
  {
    this.router.navigate(['/Purchase-Order']);
  }

  onSubmit()
  {
    //let invoice : InvoiceEntity;
    //invoice.number = this.invoiceNumber
    let invoice={number:this.invoiceNumber}
    //this.purchaseOrder.invoice=invoice;
    this.purchaseOrder= {invoice:invoice};
    this.savePurchaseOrder();

    console.log("invoiceNumber response");
    console.log(this.invoiceNumber);
    console.log("purchase response");
    console.log(this.purchaseOrder);
    console.log("invoice response");
    console.log(this.purchaseOrder.invoice);

  }

  

}
