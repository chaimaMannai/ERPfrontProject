import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerEntity } from 'app/models/customer-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers : CustomerEntity[];

  constructor(private customerServicesService : CustomerServicesService,
    private router : Router) { }

  ngOnInit(): void {
    this.getCustomers();
    
  }
  getCustomers(){
    this.customerServicesService.getCustomers().subscribe(data=>{
      this.customers=data
      console.log(data);
    })
  }
  updateCustomer(id:number){
    this.router.navigate(['update-customer',id]);

  }
  deleteCustomer(id : number)
  {
    this.customerServicesService.deleteCustomer(id).subscribe(data =>{
      console.log(data);
      this.getCustomers();
      
    }
      )
  }

  



}
