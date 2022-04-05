import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store = this.info.asObservable();

  constructor() { }

  updateData(text:any){
    this.info.next(text);
  }
}
