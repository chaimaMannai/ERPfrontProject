import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LineBuyEntity } from 'app/models/line-buy-entity';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LineBuyService {

  private basetUrl="http://localhost:9000/api/lineBuys"

  constructor(private http: HttpClient) { }

  deleteLineBuy(id :number):Observable<Object>
  {
    return this.http.delete(`${this.basetUrl}/${id}`);

  }

  addLineBuy(data:LineBuyEntity, id1:number,id2:number) : Observable<LineBuyEntity>{

    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    return this.http.post<LineBuyEntity>(`${this.basetUrl}`+'/'+id1+'/'+id2,data, { headers: headers });
  }
}
