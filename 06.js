var color = "red";
var speed = 10;
var v = "go";
var car = {
     color,
     speed,
     go: function () {
          console.log("gooooooo");
     }
};
var car1 = {
     color,
     speed,
     ["go"]: function () {
          console.log("gooooooo");
     }
};
var car2 = {
     color,
     speed,
     [v]: function () {
          console.log("gooooooo");
     }
};
car.go();
car1.go();
car2.go();