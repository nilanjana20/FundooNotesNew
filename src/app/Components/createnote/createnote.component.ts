import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  show:boolean=false;
private notelist :boolean=true;
 isshow=false;
 icongroupflag=false;
 title:any;
 desc:any;
 refreshmessage="refreshed";
 @Output() messageEvent = new EventEmitter<any>();

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }

  // show(){
  //     this.isshow=true;
  //     this.icongroupflag = false;
  // }
  
  showHide(){
    this.show=!this.show
  }

  close(){
    this.isshow=false;
    console.log(this.title, this.desc);
    this.showHide();
    let data = {
    title:this.title,
    description:this.desc
}
  this.note.createnote(data).subscribe((res:any)=>{
  console.log(res);
  this.messageEvent.emit(this.refreshmessage);
  })
  }

}



 

  