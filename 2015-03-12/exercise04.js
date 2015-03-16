(function () {
  var person = {
    buy : function(item) {
      console.log("I'm rich");
    }
  };

  var car = {
    price : 2000,
    drive: function() {
      return this.price;
    }  
  };

  // print Vrum Vrum
  car.drive();

  // print I'm rich
  if ( car.price > 1000 ) {
    person.buy(car);
  }
}());
