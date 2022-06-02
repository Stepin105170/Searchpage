import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, searchtext:any) {
    if(value=== 0 || searchtext===0){
      return value
    }
    const arr=[]
    for(const user of value){
      if(user['name']===(searchtext) || user['name'].includes(searchtext)){
        arr.push(user)
      }
    }return arr;
   
    
  }

}
