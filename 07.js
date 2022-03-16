let a1 = [1,2,3];
let a2 = [4,5,6];
console.log(...a1);

let _a1 = a1; //cùng tham chiêu vs a1
let __a1 = [...a1]; // khác tham chiếu (copy a1)

{
     let a1 = [1,2,3];
     a1.push(a2);
     console.log(a1);
}
{
     let a1 = [1,2,3];
     a1.push(...a2);
     console.log(...a1);
}
function tong(a,b,c) {
     t = a+b+c;
     console.log('tong :'+ t);
}
tong(...a1);
tong(...a2);