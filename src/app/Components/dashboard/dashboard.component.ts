import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnDestroy {
   
  isGrid: boolean=false;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dataService: DatashareService, public router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  filter(filteredString:any){
    this.dataService.updateData(filteredString.target.value);
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl("/login")
    console.log("Logout successfully");
  }

  listview(){
    this.isGrid=false;
    this.dataService.updateData1(this.viewFun().valueOf());
    console.log("function",this.viewFun());
    console.log("grid",this.isGrid);
  }

  gridview(){
    this.isGrid=true
    this.dataService.updateData1(this.viewFun().valueOf());
    console.log("function",this.viewFun());
    console.log("grid",this.isGrid);
  }
  
  changeFormat: boolean=false
  viewFun(){
    if(this.changeFormat == false){
      this.changeFormat=true
      return this.changeFormat
    }
    else{
      this.changeFormat=false
      return this.changeFormat
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
