import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerEntity } from 'app/models/customer-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer: CustomerEntity = new CustomerEntity();


  constructor(private customerServicesService : CustomerServicesService,private router :Router) { }

  ngOnInit(): void {
  }
  saveCustomer(){
    this.customerServicesService.createCustomer(this.customer).subscribe(data=>{
      console.log(data);
      this.goToCustomersList();

  },
    error => console.log("error"));
}
  
  goToCustomersList(){
    this.router.navigate(['/Customers'])
  }


  onSubmit(){
    console.log(this.customer);
    this.saveCustomer();
  }
  go()
  {
    this.goToCustomersList();
  }

}
