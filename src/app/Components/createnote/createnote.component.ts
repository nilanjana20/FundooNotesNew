import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
public notelist :boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  noteclick(){
    console.log('1234567890');
    this.notelist = true
  }
}
