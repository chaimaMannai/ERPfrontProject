import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { CustomerEntity } from 'app/models/customer-entity';
import { Observable } from 'rxjs';
const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 


@Injectable({
  providedIn: 'root'
})
export class CustomerServicesService implements OnInit {


  cutomers :any []=[];
  private _customerListUrl="http://localhost:9000/api/customers"

  constructor(private http : HttpClient) { }
  
  
   getCustomers() : Observable<any>{
    return this.http.get<CustomerEntity[]>(`${this._customerListUrl}`);
   }
    
  createCustomer(customer : CustomerEntity):Observable<Object> {
      return this.http.post(`${this._customerListUrl}`,customer);
    }
    //
    getCustomerByUserName(userName: string): Observable<CustomerEntity>
      {
       return this.http.get<CustomerEntity>(`${this._customerListUrl}/user/${userName}`);
      }
      //
      getCustomerById(id: number): Observable<CustomerEntity>
      {
       return this.http.get<CustomerEntity>(`${this._customerListUrl}/id/${id}`);
      }
      //
  updateCustomer(id: number,customer: CustomerEntity): Observable<Object>
        {
          return this.http.put(`${this._customerListUrl}/${id}`,customer);
        }

  deleteCustomer(id : number):Observable<Object>
  {
    return this.http.delete(`${this._customerListUrl}/${id}`);

  }
  getTotalCustomers()
  {
    return this.http.get<CustomerEntity>(`${this._customerListUrl}/NumberCustomers`);
  }

  getCustomerFidele()
  {
    return this.http.get<CustomerEntity>(`${this._customerListUrl}/plusFidele`);
  }

  
  ngOnInit(): void {
      throw new Error('Method not implemented.');
    }


  
    
    
      }
      




