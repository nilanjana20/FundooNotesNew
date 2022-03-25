import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  notelist:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getallNotes()
  }

  getallNotes(){
        this.note.getallnotes().subscribe((res:any)=>{
        console.log("res ===",res.data.data);
        this.notelist=res.data.data
        })
  }
   receiveMessage($event:any){
     this.getallNotes()
   }
}
