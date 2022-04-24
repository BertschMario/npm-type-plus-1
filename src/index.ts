export * from './';

const _global = global as any
const tpStore: {id:string,value:any}[] = []

declare global {
    function tpSetStoreItem(id:string,value:any):void;
    function tpGetStoreItem(id:string):any;
    function tpGetAllStoreIds():string[];
    
    interface String{tpToStoreItem(id:string):string}
    interface Number{tpToStoreItem(id:string):number}
    interface Array<T>{tpToStoreItem(id:string):Array<T>}
    interface Object{tpToStoreItem(id:string):Object}
}

_global.tpSetStoreItem = function(id:string,value:any){
  if(tpStore.find(x=>x.id==id))
    tpStore.find(x=>x.id==id)!.value=value
  else
    tpStore.push({id,value});
}

_global.tpGetStoreItem = function(id:string){
    return tpStore.filter(x=>x.id == id).map(x=>x.value)[0];
}

_global.tpGetAllStoreIds = function(){
    return tpStore.map(x=>x.id);
}


String.prototype.tpToStoreItem = function (id){
    tpSetStoreItem(id,this); return this as string;
}
Number.prototype.tpToStoreItem = function (id){
    tpSetStoreItem(id,this); return this as number;
}
Array.prototype.tpToStoreItem = function (id){
    tpSetStoreItem(id,this); return this;
}
Object.prototype.tpToStoreItem = function (id){
    tpSetStoreItem(id,this); return this;
}


