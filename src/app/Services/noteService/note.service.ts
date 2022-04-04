import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;
  title: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token')
   }

   createnote(data:any){
     console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-type': 'application/json',
         'Authorization': this.token
      })
    }
    return this.httpService.postService('notes/addNotes',data,true,header)
  }

  getallnotes(){
    console.log("token",this.token);

   let header ={
     headers: new HttpHeaders({
       'Content-type': 'application/json',
        'Authorization': this.token
     })
   }
   return this.httpService.getService('notes/getNotesList', true,header)
 }

 update(data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.postService('notes/updateNotes',data,true,header)
}

trash(data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.postService('notes/trashNotes',data,true,header)
}

archive(data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.postService('notes/archiveNotes',data,true,header)
}

archivenotes(){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.getService('notes/getArchiveNotesList',true,header)
}

trashnotes(){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.getService('notes/getTrashNotesList',true,header)
}

colornotes(data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.postService('notes/changesColorNotes',data,true,header)
}

deletenotes(data:any){
  console.log("token",this.token);

 let header ={
   headers: new HttpHeaders({
     'Content-type': 'application/json',
      'Authorization': this.token
   })
 }
 return this.httpService.postService('notes/deleteForeverNotes',data,true,header)
}

}
