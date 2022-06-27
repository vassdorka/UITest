import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces/item';
import { LoaderService } from 'src/app/loader.service';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  items: Item[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  row: any;
  id: number = 0;
  selectedItems: Item[];
  totalNumber: number = 0;
  checkedItemCounter: number = 0;

  constructor(
    private itemService: ItemService,
    public loaderService: LoaderService,
    private router: Router,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    //Display all items
    this.onGetItems();
    //Watch if an item was selected from dropdown
    this.sharedDataService.getSelectedData().subscribe(
      (data) => {
        this.selectedItems = data;
        //If item was selected, then update table just for display the selected Items
        if (this.selectedItems.length > 0) {
          this.items = [];
          this.items = this.selectedItems;
          this.totalNumber = this.items.length;
        } else {
          //If nothing was selected, display all items
          this.onGetItems();
        }
      },
      (error) => {
        console.log('error');
      }
    );
  }

  public onGetItems() {
    //Get API datas from service
    this.itemService.getItems().subscribe(
      (itemdatas) => {
        this.items = itemdatas;
        this.totalNumber = this.items.length;
      },
      (error: any) => console.log(error),
      () => console.log('Done getting items')
    );
  }

  //Pagination functions
  onTableDataChange(event: any) {
    this.page = event;
    this.onGetItems();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.onGetItems();
  }

  //Navigate to shop if a row was clicked
  public rowClicked(event: any): void {
    this.row = event.currentTarget;
    this.id = this.row.id;
    this.router.navigate(['/shop', this.id]);
  }

  //Count checked items and display it under paging
  //Working, but it's part of the row, and if a row is clicked, then it will nagigate to Shhop view and can't see the check result
  onCheck() {
    var checkedItems = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    this.checkedItemCounter = checkedItems.length;
  }

  //Select all items in once on the page and display their number
  selectAll() {
    var checkboxes = document.querySelectorAll(
      'input[type="checkbox"]'
    ) as NodeListOf<HTMLInputElement>;
    for (var checkbox of checkboxes) {
      checkbox.checked = !checkbox.checked;
    }
    var checkedItems = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    this.checkedItemCounter = checkedItems.length;
  }
}
