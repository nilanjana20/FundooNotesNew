import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if( !value || !filteredString ){
      return value;
    }
    const childMessage = [];
    for(const note of value){
        if(note.title.toLocaleLowerCase().includes(filteredString) || note.description.toLocaleLowerCase().includes(filteredString)) {
          childMessage.push(note);
        }
    }
    return childMessage;
  }

}
