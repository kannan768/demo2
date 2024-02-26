import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',

})
export class OrderbyPipe implements PipeTransform {

  transform(array: string[]): string[] {
    if (!Array.isArray(array)) {
      return array;
    }

    // Use slice to create a new array and avoid mutating the original array
    const newArray = array.slice();

    newArray.sort((a, b) => {
      // Use localeCompare for string comparison in descending order
      return b.localeCompare(a);
    });

    return newArray;
  }
}
