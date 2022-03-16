var myMap = new Map();
// var myMap = new WeakMap(); WeakMap() tượng tự map nhưng ko có key , value, entries
// API
/*
set(key,value) thêm hoặc thay đổi elements
get(key) lấy giá trị của key tương ý
size() return số lượng phần tử
clear() // xóa all elements
has() 
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
