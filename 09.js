let o = { p1: "v1", p2: "v2", p3: "v3", p4: "v4" }
let a = ["e1", "e2", "e3", "e4"]
{
     let { p1 } = o
     console.log('p1: ' + p1);
     console.log('---------');
}
{
     let { p1, p2 } = o
     console.log('p1: ' + p1 + ', p2: ' + p2);
     console.log('---------');
}
{
     let { p3: np3, p4: np4 } = o
     console.log('np3: ' + np3 + ', np4: ' + np4);
     console.log('---------');
}
{
     let [first,,third,]= a;
     console.log('first: ' + first+', third: ' + third);
     console.log('---------');
}
{
     function getp2({p2}){
          console.log('p2: ' + p2);
     }
     getp2(o);
}