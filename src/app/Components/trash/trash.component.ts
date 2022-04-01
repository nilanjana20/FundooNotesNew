import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private note:NoteService, private router:Router) { }

  ngOnInit(): void {
        this.trashnotes()
        this.router.routeReuseStrategy.shouldReuseRoute = () =>{ return false; }
  }

   trashlist:any;
   trashnotes(){
        this.note.trashnotes().subscribe((result:any)=>{
          this.trashlist=result.data.data
          console.log("trash",this.trashlist)
        })
  }
}
