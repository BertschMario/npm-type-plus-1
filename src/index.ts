export const objectProperties = (object: any) => {
    return Object.keys(object);
}
export const arrayObjectValue = (array: any[], property:string) => {
  if(array[0][property])
    return array.map(x=>x[property]);
  throwError(`property '${property}' dose not exist`, arrayObjectValue.name);
  return [];
}
export const arrayGetFirst = (array: any[]) => {
  return array.shift();
}
export const arrayGetLast = (array: any[]) => {
  return array.pop();
}

function throwError(message:string, error?:any){
  console.error(`[BetterObjectOperators${error ? '::'+error : ''}] ${message}`)
}

declare global {
  interface String {
    abc():void;
  }
}

String.prototype.abc = function(){
  console.log('objectTest')
}