import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InvoiceEntity } from 'app/models/invoice-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceService {

  private basetUrl="http://localhost:9000/api/invoices"
  constructor(private http : HttpClient) { }

  getInvoiceByNumero(number: number): Observable<InvoiceEntity>{
    return this.http.get<InvoiceEntity>(`${this.basetUrl}/${number}`);

  }

  getTotalInvoices()
  {
    return this.http.get<InvoiceEntity>(`${this.basetUrl}/TotalInvoice`);
  }

  getInvoices():Observable<any>
  {
    return this.http.get<InvoiceEntity[]>(`${this.basetUrl}`);
  }
}
