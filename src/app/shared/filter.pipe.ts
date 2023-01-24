import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, properName: string): any[] {
    const result: any = [];
    if (!value || filterString === '' || properName === '') {
      return value;
    }
    value.forEach((a: any) => {
      if (
        a[properName]
          .trim()
          .toLowerCase()
          .includes(filterString.toLocaleLowerCase())
      ) {
        result.push(a);
      }
    });
    return result;
  }
}
