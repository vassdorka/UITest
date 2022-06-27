import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedDatas: BehaviorSubject<Item[]> = new BehaviorSubject(null);

  constructor() {}
  //Get the updated selected item
  getSelectedData(): Observable<Item[]> {
    return this.selectedDatas.asObservable();
  }
  //Update the selected item
  setSelectedData(selectedDatas: Item[]) {
    this.selectedDatas.next(selectedDatas);
  }
}
