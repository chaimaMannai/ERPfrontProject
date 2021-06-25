import { Component, OnInit } from '@angular/core';
import { AppUser } from '../app-user';
import { AppUserAuth } from '../app-user-auth';
import { SecurityService } from '../security.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  
  constructor(private securityService: SecurityService, private router: Router ) { 
    this.securityObject = securityService.securityObject;
  }

  ngOnInit() {
  }

  login() {
    this.securityService.login(this.user)
      .subscribe(resp => { this.securityObject = resp; });
    this.goTodashbord();
  }  
  goTodashbord(){
    this.router.navigate(['/Products'])
  }

}
