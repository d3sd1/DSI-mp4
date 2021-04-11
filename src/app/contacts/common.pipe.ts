import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'commonField'
})
export class CommonPipe implements PipeTransform {

  transform(common: boolean, ...args: unknown[]): unknown {
    return common ? 'Sí' : 'No';
  }

}
