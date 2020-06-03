import { Injectable } from '@angular/core';

@Injectable()
export class DatosService {

  public arrayDelService: Array<any>;
  public arrayDelService2: Array<any>;
  setArray(array: any) {
    this.arrayDelService = array;
  }

  getArray() {
    return this.arrayDelService;
  }
  setArray2(array: any) {
    this.arrayDelService2 = array;
  }

  getArray2() {
    return this.arrayDelService2;
  }

}