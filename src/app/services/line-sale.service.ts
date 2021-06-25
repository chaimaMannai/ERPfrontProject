import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineSaleEntity } from 'app/models/line-sale-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineSaleService {
  
  private basetUrl="http://localhost:9000/api/LineSale"
  constructor(private http: HttpClient) { }

  deleteOrderSale():Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}`);

  }

  deleteLineSale(id :number):Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}/${id}`);

  }


  addLineSale(data:LineSaleEntity, id1:number,id2:number) : Observable<LineSaleEntity>{

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<LineSaleEntity>(`${this.basetUrl}`+'/'+id1+'/'+id2,data, { headers: headers });
  }

}
