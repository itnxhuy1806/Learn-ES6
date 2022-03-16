var deliverBoy = {
  name: "John",
  handlerMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    var that = this;
    this.handlerMessage("hello, ", function (message) {
      console.log(message + that.name)
    });
  }
}
deliverBoy.receive();
console.log("----------");
var deliverBoy = {
  name: "John",
  handlerMessage: function (message, handler) {
    handler(message);
  },
  receive: function () {
    this.handlerMessage("hello, ", (message) => console.log(message + this.name)
    )
  }
}
deliverBoy.receive();