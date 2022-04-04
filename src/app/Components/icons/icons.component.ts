import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { ArchiveComponent } from '../archive/archive.component';
import { DisplaynoteComponent } from '../displaynote/displaynote.component';
import { TrashComponent } from '../trash/trash.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})

export class IconsComponent implements OnInit {
  notelist: any;
  id:any;
  @Input() message: any;  

@Output() refresh = new EventEmitter<any>();
colorMessage = "color applied";
  archiveMessage="archive refreshed";
  trashMessage = "trash refreshed";

colors = [{code:"#f28b82"},{code:"#fbbc04"},{code:"#fff475"},{code:"#ccff90"},{code:"#a7ffeb"},{code:"#cbf0f8"},{code:"#aecbfa"},{code:"#aecbfa"},{code:"#d7aefb"},{code:"#fdcfe8"},{code:"#e6c9a8"},{code:"#e8eaed"}];

isDisplaynoteComponent: boolean=false;
isTrashComponent: boolean=false;
isArchiveComponent: boolean=false;

constructor(private note:NoteService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("receive",this.message);

    let comp = this.route.snapshot.component;

    if(comp == DisplaynoteComponent){
      this.isDisplaynoteComponent = true;
    }

    if(comp == TrashComponent){
      this.isTrashComponent = true;
    }

    if(comp == ArchiveComponent){
      this.isArchiveComponent = true;
    }
    
  }

  trashnotes(){
      let data = {
        noteIdList: [this.message.id],
        isDeleted: true,
    }
    this.note.trash(data).subscribe((res:any)=>{
      console.log("delete a note",res);
      this.refresh.emit(this.trashMessage);
    })
}

deletenotesforever(){
  let data = {
    noteIdList: [this.message.id],
    isDeleted: true,
}
this.note.deletenotes(data).subscribe((res:any)=>{
  console.log("delete a note forever",res);
  this.refresh.emit(this.trashMessage);
})
}

  restorenotes(){
    let data = {
      noteIdList: [this.message.id],
      isDeleted: false,
  }
  this.note.trash(data).subscribe((res:any)=>{
    console.log("note restored",res);
    this.refresh.emit(this.trashMessage);
  })
  }

archivenotes(){
  let data = {
    noteIdList: [this.message.id],
    isArchived: true,
  }
  this.note.archive(data).subscribe((res:any)=>{
    console.log("archive a note",res);
    this.refresh.emit(this.archiveMessage);
  })
}

unarchivenotes(){
  let data = {
    noteIdList: [this.message.id],
    isArchived: false,
  }
  this.note.archive(data).subscribe((res:any)=>{
    console.log("unarchive a note",res);
    this.refresh.emit(this.archiveMessage);
  })
}
  
backgroundcolornotes(color:any){
  let data = {
    color: color,
    noteIdList: [this.message.id],
  }
  this.note.colornotes(data).subscribe((res:any)=>{
    console.log("color a note",res);
    this.refresh.emit(this.colorMessage);
  })
  
}

}
