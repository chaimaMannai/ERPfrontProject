import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { ProductEntity } from 'app/models/product-entity.model';
import { Observable, throwError } from 'rxjs';
import { filter, map } from 'rxjs/operators';



const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
 

@Injectable({
  providedIn: 'root'
})

export class ProductServiceService  implements OnInit {
  getProductByName(subname: any) {
    throw new Error('Method not implemented.');
  }
  
product :any []=[];
private _productListUrl="http://localhost:9000/api/products" 
  constructor(private http: HttpClient) { }
  public getProduct() :Observable <any> {
    

  return this.http.get<any[]>(this._productListUrl, { 'headers': headers }).pipe(response =>
    response)
    }

    public addProduct(body?:ProductEntity) :Observable <ProductEntity> {
      
      console.log(body)
      if (body === null || body === undefined) {
        return throwError("Required parameter body was null or undefined.");
      }
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
  
      return this.http.post<ProductEntity>(
        `${this._productListUrl}`,
        body,
        { headers: headers }
      );
    
      }

  ngOnInit() {
   
  }

  public deleteProduct(productId?: number) :Observable <ProductEntity> {
      
    console.log(productId)
    if (productId === null || productId === undefined) {
      return throwError("Required parameter body was null or undefined.");
    }
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    return this.http.delete<any>(
      `${this._productListUrl}/${productId}`,
    
      { headers: headers }
    );
  
    }

    public updateProduct(productId?: number ,body?:ProductEntity) :Observable <ProductEntity> {
      
      console.log(productId)
      if (productId === null || body === undefined) {
        return throwError("Required parameter body was null or undefined.");
      }
      const headers = new HttpHeaders({ "Content-Type": "application/json" });
  
      return this.http.put<ProductEntity>(
        `${this._productListUrl}/${productId}`,
        body,
        { headers: headers }
      );
    
      }

  getTotalProducts()
  {
    return this.http.get<ProductEntity>(`${this._productListUrl}/TotalProducts`);
  }

  getProductLePlusAchete()
  {
    return this.http.get<ProductEntity>(`${this._productListUrl}/LeplusAchete`);
  }

  getProductByUserName(subname :string)
  {
    return this.http.get<ProductEntity>(`${this._productListUrl}/name/${subname}`);  }
}
