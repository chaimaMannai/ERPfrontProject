import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderSaleEntity } from 'app/models/order-sale-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';
import { OrderSaleServiceService } from 'app/services/order-sale-service.service';

@Component({
  selector: 'app-add-or-edit-order-sale',
  templateUrl: './add-or-edit-order-sale.component.html',
  styleUrls: ['./add-or-edit-order-sale.component.css']
})
export class AddOrEditOrderSaleComponent implements OnInit {
  
  filtredCustomer;
  orderSale: OrderSaleEntity;
  invoiceNumber:number;
  
  constructor(private customerServicesService : CustomerServicesService,private ordersaleService : OrderSaleServiceService, private router: Router) { }

  ngOnInit(): void {

   

  }
  
  searchPerson(subname) {
    console.log("wazgha")
    this.customerServicesService.getCustomerByUserName(subname).subscribe(
      (response) => {
        this.filtredCustomer = response;
        console.log("wazghaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(this.filtredCustomer)

      },
      (error) => {
        console.log(error);
      }
    );
  }

  saveProvider()
  {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    this.ordersaleService.addOrderSalesList(this.orderSale, this.filtredCustomer.id).subscribe( data =>{
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
      console.log(data);
      this.goToList();
     
    },
    error => console.log(error)); 
    
  }
  

  goToList()
  {
    this.router.navigate(['/Order-Sale'])
  }


  onSubmit(){
  console.log("eeekkekkekekekekekekkeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
  
    console.log(this.invoiceNumber);
    console.log(this.orderSale);
    console.log(this.filtredCustomer);
    let invoice={number:this.invoiceNumber}
    this.orderSale = {invoice:invoice}

   
    console.log(this.orderSale.invoice.number);
    //console.log(this.orderSale);

    this.saveProvider();
    console.log(this.orderSale);
  }



}
