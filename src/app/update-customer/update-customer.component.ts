import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerEntity } from 'app/models/customer-entity';
import { CustomerServicesService } from 'app/services/customer-services.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer : CustomerEntity = new CustomerEntity();
  id : number ;


  constructor(private customerServicesService : CustomerServicesService,private router :Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("a1");
    this.id= this.route.snapshot.params['id'];
    this.customerServicesService.getCustomerById(this.id).subscribe(data => {
      this.customer= data;
    },error => console.log(error));

  }
  goToCustomersList()
  {
    this.router.navigate(['/Customers'])
  }
  onSubmit()
  {
    this.customerServicesService.updateCustomer(this.id, this.customer).subscribe( data => {
      this.goToCustomersList();
    }, error => console.log(error));
  }

}
