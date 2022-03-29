import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:any;
title:any;
description:any;

constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // console.log("notelist",this.data.title);
  }

  ngOnInit(){
    this.id=this.data.id;
   this.title=this.data.title;
   this.description=this.data.description;
  }
  onNoClick() {
    let info = {
      noteId:this.id,
      title:this.title,
      description:this.description
  }
    this.note.update(info).subscribe((res:any)=>{
    console.log(res);
    })
    this.dialogRef.close();
  }

}
