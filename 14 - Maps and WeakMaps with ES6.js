var myMap = new Map();
// var myMap = new WeakMap(); WeakMap() Similar to map but without key , value , entries
// API
/*
set(key,value) add or edit elements
get(key) get value of key
size() returns the number of elements
clear() // delete all elements
has(key) // Returns TRUE if the key exists in the MAP, otherwise returns FALSE
*/
myMap.set('foo', 'bar');
myMap.set('hello', 'world');
console.log(myMap.get('foo')); // bar
console.log(myMap.has('hello')); // true
console.log(myMap.size); // 2
myMap.clear();
console.log(myMap.size); // 0
var myObj = {};
var myFunc = function(){};
myMap.set(myObj, 'bar');
myMap.set(myFunc, 'world');
myMap.set('a', 2);
for([key, value] of myMap.entries()){
     console.log(key + ' = ' + value);
   }
