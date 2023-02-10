var items = [null, 123, undefined,null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]
var itemString = []
var itemNumber = []
var itemUnder = []
var itemNull = []
var itemBool = []
var itemSim = []
var result = []
for (var i of items){
    if(typeof(i) == 'string') itemString.push(i)
    else if(typeof (i) == "number") itemNumber.push((i))
    else if(typeof (i) == "undefined") itemUnder.push((i))
    else if(typeof (i) == "boolean") itemBool.push((i))
    else if(typeof (i) == "symbol") itemSim.push((i))
    else if(typeof (i) == "null") itemNull.push((i))
}
console.log(result)

if(itemBool.length>0) result.push(itemBool)
if(itemString.length>0) result.push(itemString)
if(itemNumber.length>0) result.push(itemNumber)
if(itemUnder.length>0) result.push(itemUnder)
if(itemNull.length>0) result.push(itemNull)
if(itemSim.length>0) result.push(itemSim)
result.sort((a, b)=> b.length - a.length)
console.log(result)







