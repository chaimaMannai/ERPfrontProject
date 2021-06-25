import { Component, OnInit } from '@angular/core';
import { InvoiceEntity } from 'app/models/invoice-entity';
import { InvoiceServiceService } from 'app/services/invoice-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices : InvoiceEntity[];

  displayedColumns: string[] = ['number','date','toPayments'];

  constructor(private invoiceService: InvoiceServiceService) { }

  ngOnInit(): void {
    this.getInvoicesList();
  }

  public getInvoicesList(){
    this.invoiceService.getInvoices().subscribe(data=>{
      this.invoices=data;
      console.log(data);
    })
}

}
