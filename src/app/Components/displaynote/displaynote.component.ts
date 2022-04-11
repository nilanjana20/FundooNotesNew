import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatashareService } from 'src/app/Services/dataShare/datashare.service';
import { NoteService } from 'src/app/Services/noteService/note.service';
import { UpdateComponent } from '../update/update.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent implements OnInit {
  format:any;
  filteredString='';
  @Input() childMessage: any;  
  @Output() refreshevent= new EventEmitter<string>();
  displaymessage="notesrefresh"
  
  constructor(public dialog: MatDialog, public dataShare: DatashareService) { }
 
  ngOnInit(): void { 
    this.dataShare.store.subscribe(res => this.filteredString = res)
    this.dataShare.store1.subscribe(x => this.format=x)
   }

  openDialog(note:any) {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '550px',
      data: note,
    });
    dialogRef.afterClosed();
  }
  
  receiveMessage(event:any){
   console.log(event);
   this.refreshevent.emit(this.displaymessage)
  }
}
