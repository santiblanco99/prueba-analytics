import { Component, OnInit, Input } from '@angular/core';
import { CommerceService } from 'src/app/services/commerce.service';
import { Commerce } from 'src/app/models/Commerce';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() commerceArray: Commerce[];

  commerces: Commerce[];
  dataReady = false;

  constructor(private commerceService: CommerceService) { }

  async ngOnInit(): Promise<void> {
    console.log(this.commerceArray);
    try {
      let fetchedData = await this.commerceService.getCommerces().toPromise();
      this.commerces = fetchedData;
    } catch (error) {
      
    }

  }

}
