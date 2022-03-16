function* greet() { // yeald điểm tạm dừng bên trong generator function
     console.log(`Generators are "lazy"`);
     yield "How";
     console.log(`I'm not called until the second next`);
     yield "are";
     console.log(`Call me before "you?"`);
     yield "you?";
     console.log(`Called when "done"`);
     yield "you?";
}
var greeter = greet();
// console.log(greeter.next());
for (let word of greeter) { // mỗi lần lập sẽ chạy đến 1 yeald ?
     console.log(word);
}
console.log("------------")
function* greet1(){
     let friendly = yield "How";
     friendly =  yield friendly + "are";
     yield friendly + "you?";
   }
   
   var greeter1 = greet1();
   console.log(greeter1.next().value);              // How
   console.log(greeter1.next(" the heck ").value);  //  the heck are
   console.log(greeter1.next([" silly ol`"]).value);  //  silly ol'you?

console.log("------------")
//    Yield* là một dạng ủy quyền thực thi. Ở đây, yield* có thể nhúng mã của một generator function ngay sau nó hoặc là ủy quyền trực tiếp cho một iterator object.
//    Cú pháp :
//    yield* [[expression]] ,expression ở đây trả về iterator object như đã nói, có thể là generator function, hoặc mảng, hoặng string, hoặc list, ....

function* g2() {
     yield 3;
     yield 4;
}

function* g1() {
     yield* [1, 2];
     yield* g2();
     yield* '56';
     yield* Array.from(arguments);
}
var iterator = g1(9, 10);

console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: 3, done: false}
console.log(iterator.next()); // {value: 4, done: false}
console.log(iterator.next()); // {value: "5", done: false}
console.log(iterator.next()); // {value: "6", done: false}
console.log(iterator.next()); // {value: 9, done: false}
console.log(iterator.next()); // {value: 10, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
