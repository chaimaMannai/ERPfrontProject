import { Component, OnInit } from '@angular/core';
import { PaymentEntity } from 'app/models/payment-entity';
import { PaymentsService } from 'app/services/payments.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments:PaymentEntity[];
  displayedColumns: string[] = ["invoice","mode","datePayment","montant","actions"];

  constructor(private paymentService :PaymentsService) { }

  ngOnInit(): void {
    this.getPayments();
  }

  getPayments(){

    this.paymentService.getPaymentsList().subscribe(e =>{
      this.payments=e
      console.log("louay sousou")
      console.log(e)
    })
  }


  deletePayment(id : number)
    {
      console.log(id)
      console.log("550")
      console.log(id)
      this.paymentService.deletePayment(id).subscribe( data => {
        console.log(data);
        console.log("YA HOUUUUUMA")
        this.getPayments();
      })
    }
  
}
