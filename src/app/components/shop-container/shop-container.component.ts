import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/interfaces/item';
import { ShopDetails } from 'src/app/interfaces/shop-details';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-shop-container',
  templateUrl: './shop-container.component.html',
  styleUrls: ['./shop-container.component.css'],
})
export class ShopContainerComponent implements OnInit {
  detail: ShopDetails[] = [];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    public loaderService: LoaderService
  ) {}

  //Get the clicked item's id from url, then find the matching item from original array and pass the object to this.detail
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      var id = params.get('id');

      this.itemService.getItems().subscribe(
        (itemdatas) => {
          for (let i: number = 0; i < itemdatas.length; i++) {
            if (itemdatas[i].id == id) {
              this.detail = itemdatas[i].shopDetail;
            }
          }
        },
        (error: any) => console.log(error),
        () => console.log('Done getting items')
      );
    });
  }
}
