import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentEntity } from 'app/models/payment-entity';
import { InvoiceServiceService } from 'app/services/invoice-service.service';
import { PaymentsService } from 'app/services/payments.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {
  filtredInvoice ;
  payment : PaymentEntity;
  modepayment :string;
  montantPayment :number;

  constructor(private invoiceService :InvoiceServiceService,private paymentService :PaymentsService, private router: Router) { }

  ngOnInit(): void {
    this.payment =  new PaymentEntity();
  }

  searchInvoice(number){

    console.log("wazgha")
    this.invoiceService.getInvoiceByNumero(number).subscribe(
      (response) => {
        this.filtredInvoice = response;
        console.log("wazghaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(this.filtredInvoice)

      },
      (error) => {
        console.log(error);
      }
    );

  }


  save()
  {
    this.payment.mode=this.modepayment;
    this.payment.montant=this.montantPayment;

    console.log(this.payment)
    this.paymentService.addPayment(this.payment, this.filtredInvoice.number).subscribe( data =>{
      console.log("aqwxcv")
      console.log(data);
      this.goToList();
     
    },
    error => console.log(error)); 
    
  }
  

  goToList()
  {
    this.router.navigate(['/Payments'])
  }


  onSubmit(){
  console.log("************");
  
  
    console.log(this.payment);
    this.save();
    //console.log(this.payment);
  }

}
