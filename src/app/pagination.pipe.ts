import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(value: any[]): any {
    return (new Array(value.length)).fill(0).map((x,i)=>i);
  }

}
