import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'app/model/api-response';
import { ProviderModel } from 'app/model/provider-model';
import { ProviderService } from 'app/service/provider.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent implements OnInit {


  provideers: ProviderModel[];
  

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
    
    this.getProvideers();

  
  }

  private getProvideers() {

    this.providerService.getProvidersList().subscribe(data => {
      this.provideers=data;
      console.log("aaaaa",data);
    })
    
  }

  deleteProvider(id: number)
  {
    this.providerService.deleteProvider(id).subscribe( data => {
      console.log(data);
      this.getProvideers();
    })
  }


  updateProvider(id: number){
    this.router.navigate(['update-provider',id]);
  }


  /*deleteProvider(item)
{
console.log("item")
console.log(item)
 
this.providerService.deleteProvider(item.id).subscribe(e=>
  {
    console.log(e)
    this.ngOnInit()
  })
}*/

}
