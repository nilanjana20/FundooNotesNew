import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {
  private info = new Subject<any>();
  public store = this.info.asObservable();

  private info1 = new Subject<any>();
  public store1 = this.info1.asObservable();

  private info2 = new Subject<any>();
  public store2 = this.info2.asObservable();

  constructor() { }

  updateData(text:any){
    this.info.next(text);
  }

  updateData1(text:any){
    this.info1.next(text);
  }
  
  updateData2(text:any){
    this.info2.next(text);
  }

}

