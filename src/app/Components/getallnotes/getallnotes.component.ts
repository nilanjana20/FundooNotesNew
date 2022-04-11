import { Component, OnInit } from '@angular/core';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;
  format:any;

  constructor(private note:NoteService, public dataService:DatashareService) { }

  ngOnInit(): void {
    this.getallNotes()
    this.dataService.store1.subscribe(x => this.format=x)
    this.dataService.store2.subscribe((res:any)=>{
      console.log(res);
      this.getallNotes()
    })
  }

  getallNotes(){
        this.note.getallnotes().subscribe((res:any)=>{
        console.log("res ===",res.data.data);
        this.notelist=res.data.data
        
        this.notelist = this.notelist.filter(function(list:any){
          return list.isDeleted === false && list.isArchived === false;
        })
        console.log(this.notelist.reverse());
        
        })
  }
   receiveMessage(event:any){
     this.getallNotes()
     console.log(event);
     
   }
}
