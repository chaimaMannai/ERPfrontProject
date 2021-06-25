import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'app/model/api-response';
import {ProviderModel} from 'app/model/provider-model';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseURL=  "http://localhost:9000/api/providers";

  constructor(private httpClient: HttpClient) { }

  getProvidersList() : Observable<ProviderModel[]>{
    return this.httpClient.get<ProviderModel[]>(`${this.baseURL}`);
  }

  createProvider(provider: ProviderModel): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`,provider);
  }


  getProviderById(id: number): Observable<ProviderModel>
  {

    console.log("a2");
    return this.httpClient.get<ProviderModel>(`${this.baseURL}/id/${id}`);
  }


  getProviderByUserName(userName: string): Observable<ProviderModel>
  {

    console.log("a2");
    return this.httpClient.get<ProviderModel>(`${this.baseURL}/userName/${userName}`);
  }




  deleteProvider(id: number): Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


  updateProvider(id: number,provider: ProviderModel): Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}/${id}`, provider);
  }

  getTotalProviders()
  {
    return this.httpClient.get<ProviderModel>(`${this.baseURL}/TotalProvider`);
  }

  getProviderLePlusFidele()
  {
    return this.httpClient.get<ProviderModel>(`${this.baseURL}/plusFidele`);
  }


  /*public deleteProvider(providerId?: number) :Observable <ProviderModel> {
      
    console.log(providerId)
    if (providerId === null || providerId === undefined) {
      return throwError("Required parameter body was null or undefined.");
    }
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
 
    return this.httpClient.delete<any>(
      `${this.baseURL}/${providerId}`,
    
      { headers: headers }
    );
  
    }*/


}
