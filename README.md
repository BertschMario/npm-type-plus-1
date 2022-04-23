![TypePlus1_logo.png](src/TP1_logo.png)
# TypePlus1

TypePlus1 is a simple but powerful tool witch makes many operation
much simpler and compacter. TypePlus1 not only comes with simple
functions, it expands interfaces and makes your code shorter
and simpler.

### Installation
TypePlus1 can be installed in every nodeJs project
It works for JavaScript and TypeScript code!
 
1. install package `npm i type-plus-1`
2. import package `import * as tp from 'type-plus-1'`

After one import somewhere in the project, it will work
everywhere. If somehow it cant find something, import
the package and initialize an constant with the import.


### Usage

#### Important

All our functions, types, etc are always starting with tp.

---

#### Store
The Store works like the localStorage but the data gets
lost after the page gets reloaded or closed.

* `tpSetStoreItem(id:string, value:any) : void`
* `tpGetStoreItem(id:string) : any`
* `myVar.tpToStoreItem(id:string) : SELF`
* `tpGetAllStoreIds() : string[]`

```javascript
const myVar = 'Test'
myVar.tpToStoreItem('store-test')

console.log(tpGetStoreItem('store-test'))
// CONSOLE: 'Test'
```


