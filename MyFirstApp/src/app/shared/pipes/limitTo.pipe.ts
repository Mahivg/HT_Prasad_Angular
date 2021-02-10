import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'limitTo'
})
export class LimitToPipe implements PipeTransform {

  // {{ myString | limitTo |}}
    transform(value: string, subStringLength: number) {
      if(value.length > 0 && value.length < subStringLength) {
        return value;
      }
      return value.substring(0,subStringLength);
    }

}
