import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameShorten'
})
export class NameShortenPipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.length > length 
      ? value.substr(0, length) + "..." 
      : value;
  }

}
