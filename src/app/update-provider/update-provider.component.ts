import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderModel } from 'app/model/provider-model';
import { ProviderService } from 'app/service/provider.service';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
  
  id: number;
  provideer: ProviderModel = new ProviderModel();

  constructor(private providerService: ProviderService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log("a1");

    this.id= this.route.snapshot.params['id'];
    this.providerService.getProviderById(this.id).subscribe(data => {
      this.provideer= data;
    },error => console.log(error));
  }


  goToProviderList()
  {
    this.router.navigate(['/Provider'])
  }

  onSubmit()
  {

    
    this.providerService.updateProvider(this.id, this.provideer).subscribe( data => {
      this.goToProviderList();
    }, error => console.log(error));
  }

  go(){
    this.goToProviderList();
  }

}
