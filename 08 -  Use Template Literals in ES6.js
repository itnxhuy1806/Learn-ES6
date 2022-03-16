{
     let a = 1;
     console.log(`a: ${a}`);
}
console.log("-------------")
function tag(str, ...val){
     console.log(str); // [ 'It\'s', 'I\'m sleepy' ]
     console.log(val);  // [ 15 ]
   }
let mess = tag`Its ${new Date().getHours()} Im ${"a"}`;