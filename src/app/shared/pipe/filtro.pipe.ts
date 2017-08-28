import { Pipe, PipeTransform } from '@angular/core';
import * as _ from "lodash";

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
        if (args) {
          return _.filter(value, row => row.nome.indexOf(args) > -1);
        }
        return value;
  }
}
