import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getItems(): Observable<any> {
    return this.http.get('/api/items').map(res => res.json());
  }


  editItem(item): Observable<any> {
    return this.http.put(`/api/item/${item._id}`, JSON.stringify(item), this.options);
  }

  addItem(item): Observable<any> {
    return this.http.post('/api/item', JSON.stringify(item), this.options);
  }



}
