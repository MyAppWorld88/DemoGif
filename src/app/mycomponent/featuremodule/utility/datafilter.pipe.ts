import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datafilter'
})
export class DatafilterPipe implements PipeTransform {

  transform(value: any, searchTerm:any):any{
  if(searchTerm===undefined || searchTerm===''){
    return value;
  }
  if(searchTerm!=undefined){
  return  value.filter(res=>{
      return res.title.toLowerCase().indexOf(searchTerm.toLowerCase())>-1  ;
    })

  }
  
  }

}
