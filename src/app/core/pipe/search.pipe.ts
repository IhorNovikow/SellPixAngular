import { Pipe, PipeTransform } from '@angular/core';
import { GameMongo } from '../interface/mongoGame';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value:GameMongo[] , args: string = '') {
    if (!args.trim()) {
      return value;
    }
    return value.filter((el) => {
      return el.title.includes(args.trim());
    });
  }
}
