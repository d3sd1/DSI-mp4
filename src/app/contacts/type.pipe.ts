import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'typeField'
})
export class TypePipe implements PipeTransform {

  transform(type: string, ...args: unknown[]): unknown {
    switch (parseInt(type, 10)) {
      case 0:
        return 'Trabajo';
      case 1:
        return 'Personal';
      default:
        return 'Valor no encontrado para el tipo: ' + type;
    }
  }

}
