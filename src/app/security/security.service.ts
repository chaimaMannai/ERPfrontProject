import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { LOGIN_MOCKS } from './login-mocks';



@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject : AppUserAuth = new AppUserAuth();

  constructor(private router: Router) {
   }

  logout():void {
    this.resetSecurityObject();
    this.router.navigate(['/logout'])
  }

  resetSecurityObject():void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false ;

    this.securityObject.canAccessInvoice = false ; 
    this.securityObject.canAccessStock = false ;
    this.securityObject.canAccessProduct = false;
    this.securityObject.canAccessCustomer = false ;
    this.securityObject.canAccessProvider = false ; 
    this.securityObject.canAccessSaleOrder = false;
    this.securityObject.canAccessPurshaseOrder = false ; 
    // this.securityObject.canAccessPaiment = false ;

    localStorage.removeItem("bearerToken");

  }


  login(entity : AppUser) : Observable <AppUserAuth>{
    
    // initialize security Object 
    this.resetSecurityObject();

    // use object assign to update the current object 
    // Note don't create a new AppUserAuth object because that destroys all refrence to object 
    Object.assign(this.securityObject , LOGIN_MOCKS.find(
      user => user.userName.toLowerCase() === entity.userName.toLowerCase()));
      if(this.securityObject.userName!==""){
        // store bearer tokekn into local storage 
        localStorage.setItem("bearerToken", this.securityObject.bearerToken);
      } 
      return of<AppUserAuth>(this.securityObject);
  }
}
