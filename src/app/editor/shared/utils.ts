import * as cloneDeep from 'lodash/cloneDeep';

export class Utils {

  public static deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  public static clone(obj: any): any {
    return cloneDeep(obj);
  }

}
