import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchaseOrder } from 'app/model/purchase-order';
import { LineBuyEntity } from 'app/models/line-buy-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderServiceService {

  private baseURL=  "http://localhost:9000/api/purchaseOrders";

  constructor(private http : HttpClient) { }


  getPurchaseOrderList()
  {
    return this.http.get<PurchaseOrder[]>(`${this.baseURL}`);
  }

  deletePurchaseOrder(number : number):Observable<Object>
  {
    return this.http.delete(`${this.baseURL}/${number}`);
  }

  addPurchaseOrder(data : PurchaseOrder, id : number) : Observable<PurchaseOrder>
  {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<PurchaseOrder>(`${this.baseURL}`+'/'+id,data, { headers: headers });
  }

  getLinesBuysForPurchaseOrder(id : number ): Observable<LineBuyEntity[]>{
    return this.http.get<LineBuyEntity[]>(`${this.baseURL}/linesByus/${id}`);

  }

  getValidPurchaseOrder(id : number):Observable<Object>
  {
    return this.http.get(`${this.baseURL}/validPurchaseOrder/${id}`);

  }

  getPurchaseOrdeById(id :number):Observable<Object>
  {
    return this.http.get(`${this.baseURL}/${id}`);

  }
}
