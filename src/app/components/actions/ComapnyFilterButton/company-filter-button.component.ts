import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-company-filter-button',
  templateUrl: './company-filter-button.component.html',
  styleUrls: ['./company-filter-button.component.css'],
})
export class ComapnyFilterButtonComponent implements OnInit {
  @Input() filterName: string | undefined;
  @Input() searchPlaceHolder: string; //placeholder of search area
  date = new FormControl(new Date());
  registryDateOptions: string[] = [
    'Today',
    'Yesterday',
    'This week',
    'this month',
    'Last 7 days',
    'Last 30 days',
    'Last 60 days',
  ];

  items: Item[] = [];
  selectedCompany: Item;
  datas = new FormControl('');
  selectedItems: Item[] = [];

  constructor(
    private itemService: ItemService,
    private sharedDatas: SharedDataService
  ) {}

  ngOnInit(): void {
    this.onGetItems();
  }

  public onGetItems() {
    //Get fresh data
    this.itemService.getItems().subscribe(
      (itemdatas) => {
        this.items = itemdatas;
      },
      (error: any) => console.log(error),
      () => console.log('Done getting items')
    );
  }

  //If an company name was selected, then find the matching Item and share it with data-table component
  onSelect(company: any) {
    this.selectedItems = company.value;
    this.sharedDatas.setSelectedData(this.selectedItems);
  }
}
