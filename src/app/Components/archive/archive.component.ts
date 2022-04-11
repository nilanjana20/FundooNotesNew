import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  format:any;

  constructor(private note:NoteService, private router:Router, public dataService:DatashareService) { }

  ngOnInit(): void {
    this.archivenotes()
    this.dataService.store1.subscribe(x => this.format=x)
    // this.router.routeReuseStrategy.shouldReuseRoute = () =>{ return false; }
  }

  archivelist:any;
  archivenotes(){
     this.note.archivenotes().subscribe((result:any)=>{
        this.archivelist=result.data.data
        console.log("archive notes",this.archivelist)
     })
  }
  
  receiveMessage(event:any){
    this.archivenotes()
  }
}
