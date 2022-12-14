import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'collectionValue'
})
export class CollectionValuePipe implements PipeTransform {

  transform(collection: any[]): number {
    return (collection.reduce((spend, card) => spend += card.lp, 0)).toFixed(1)
  }

}
