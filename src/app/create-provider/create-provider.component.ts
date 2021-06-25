import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProviderModel } from 'app/model/provider-model';
import { ProviderService } from 'app/service/provider.service';



@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.css']
})
export class CreateProviderComponent implements OnInit {

  provideer: ProviderModel= new ProviderModel();

  constructor(private providerService: ProviderService, private router: Router) { }

  ngOnInit(): void {
  }


  saveProvider()
  {
    this.providerService.createProvider(this.provideer).subscribe( data =>{
      console.log(data);
      this.goToProviderList();
    },
    error => console.log(error));
    
  }


  goToProviderList()
  {
    this.router.navigate(['/Provider'])
  }


  onSubmit(){
    console.log(this.provideer);
    this.saveProvider();
  }
  go(){
    this.goToProviderList();
  }

}
