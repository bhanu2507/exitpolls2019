import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ReadjsonService {
  private _jsonURL = '../assets/constituency.json';
  public apiData: any;
  constructor(private http: HttpClient) {
    this.getJSON().then(data => {
      this.apiData = data;
    });
   }
   public getJSON(): Promise<any> {
    return this.http.get(this._jsonURL).toPromise();
  }
}


