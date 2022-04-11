import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  message: any;
  format:any;

  constructor(private note:NoteService, private router:Router, public dataService:DatashareService) { }

  ngOnInit(): void {
        this.trashnotes()
        this.dataService.store1.subscribe(x => this.format=x)
        // this.router.routeReuseStrategy.shouldReuseRoute = () =>{ return false; }
  }

   trashlist:any;
   trashnotes(){
        this.note.trashnotes().subscribe((result:any)=>{
          this.trashlist=result.data.data
          console.log("trash",this.trashlist)
        })
  }

  receiveMessage(event:any){
    this.trashnotes()
  }

}
