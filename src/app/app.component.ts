import { Component } from '@angular/core';
import { CommerceService } from './services/commerce.service';
import { Commerce } from './models/Commerce';

import * as $ from 'jquery';

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
      this.fadeInAnimation();

      

    } catch (error) {
      console.log(error);
      this.dataFailed = true;
      
    }
  }

  fadeInAnimation = ()=>{
    $(document).ready(function() {
    
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},300);
                      
              }
              
          }); 
      
      });
      
  });
  }

  
}
