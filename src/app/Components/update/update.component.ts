import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
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
noteId:any;

constructor(private note:NoteService,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public dataservice : DatashareService) {
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

    this.dataservice.updateData2("refreshed");
  })
    this.dialogRef.close();
  }

}
