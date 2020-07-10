import { Component } from '@angular/core';
import { CommerceService } from './services/commerce.service';
import { Commerce } from './models/Commerce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-analytics';

  commerceArray: Commerce[];

  //indicates if data has loaded correctly
  dataReady = false;

  //indicates if data failed to load
  dataFailed = false;


  constructor(private commerceService: CommerceService){

  }
  async ngOnInit(){
    try {
      this.commerceArray = await this.commerceService.getCommerces().toPromise();
      this.dataReady = true;

    } catch (error) {
      console.log(error);
      this.dataFailed = true;
      
    }
  }
}
