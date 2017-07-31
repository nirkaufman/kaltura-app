
import {FormControl} from '@angular/forms';

export class KalturaValidators {

  static startWithK (control:FormControl) {
    if(!control.value.startsWith('k')) {
      return {isK: false}
    }
    return null;
  }

  static startWithKAsync (control:FormControl) {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve({isK: false});
      }, 3000)
    });
  }


}