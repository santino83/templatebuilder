export class ObjectUtils {

  public static deepClone(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

}
