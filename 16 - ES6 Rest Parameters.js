function myFunc() {
     console.log(arguments); // arguments is object
}

myFunc(1, 2, 3)
console.log("------------");
function Store() {
     var aisle = {
          fruit: [],
          vegetable: []
     }
     return {
          add: function (category, ...items) {
               console.log(arguments);
               var items = [].splice.call(arguments, 1);
               console.log("run [].splice.call()");
               console.log(arguments);
               console.log(items); // ["apples", "oranges"]
               items.forEach(function (value, index, array) {
                    aisle[category].push(value);
               });
          },
     }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');