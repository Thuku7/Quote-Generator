import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value:any) : any{

    const postDate = new Date(value);
    const viewDate = new Date();


    const singleDay = 100*60*60*24;

    const timeDiff = viewDate.getTime() - postDate.getTime();
    const dayDiff = Math.round(timeDiff/singleDay)
    return null;
  }

}
