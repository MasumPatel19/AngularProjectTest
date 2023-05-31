import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class DemopipePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  nvalue: string | undefined

  transform(value: any, ...args: any[]): any {

    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }
}
