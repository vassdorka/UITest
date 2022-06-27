import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}
  private baseApiUrl = environment.baseApiUrl;

  //GET http request
  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(
      `${this.baseApiUrl}/templates/vwQK-0IbZvyq/data?access_token=6ls13plw6b4poo3s98s0d058hsddar8ewcg3of4o`
    );
  }
}
