export {tpFL, tpFL_OP};

// NOT WORKING FOR NOW

const tpFL_object : {object?:any[],propertyName?:string,operator?:tpFL_OP,value?:any} = {};
enum tpFL_OP {
    includes = 1,
    notIncludes = 2
}

class tpFL {
    Object = tpFL_initObject
    Property = tpFL_property
    Operator = tpFL_operator
    Value = tpFL_value
    Execute = tpFL_execute
}

function tpFL_property(propertyName:string){
    tpFL_object.propertyName = propertyName
    return new tpFL();
}
function tpFL_operator(operator:tpFL_OP){
    tpFL_object.operator = operator;
    return new tpFL();
}
function tpFL_initObject(object:any){
    tpFL_object.object = object;
    return new tpFL();
}
function tpFL_value(value:any){
    tpFL_object.value = value;
    return new tpFL();
}
function tpFL_execute() : any{
    console.log(tpFL_object)
    if(!tpFL_object.operator || !tpFL_object.object || !tpFL_object.value){
        console.error('Operator, Object or Value missing in TpFL Script')
        return null;
    }
    if(tpFL_object.operator == tpFL_OP.includes){
        return tpFL_object.object.filter(x=> {
            if(tpFL_object.propertyName)
                return x[tpFL_object.propertyName].includes(tpFL_object.value)
            else
                return JSON.stringify(x).includes(tpFL_object.value)
        });
    }
    if(tpFL_object.operator == tpFL_OP.notIncludes){
        return tpFL_object.object.filter(x=> {
            if(tpFL_object.propertyName)
                return !x[tpFL_object.propertyName].includes(tpFL_object.value)
            else
                return !JSON.stringify(x).includes(tpFL_object.value)
        });
    }
    return null;
}