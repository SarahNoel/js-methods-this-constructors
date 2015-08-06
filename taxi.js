function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = driverName;
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = [];
}

var cab = new Taxi("Matt Damon", 7);

console.log(cab);

Taxi.prototype.addPassenger = function(name){
  if(this.passengers.length < this.maxNumberOfPassengers){
    if (typeof name === 'string'){
      this.passengers.push(name);
    }
  }
  else{
    return "This taxi is full.";
  }
  return this.passengers;
};

console.log(cab.addPassenger("Ben Affleck"));

console.log(cab);

Taxi.prototype.passengerCount = function(){
  return this.passengers.length;
};

Taxi.prototype.full = function(){
  if(this.passengers.length === this.maxNumberOfPassengers){return true;
  }
  else{
    return false;
  }
};

Taxi.prototype.dropOffPassengers = function() {
  this.passengers = [];
};









// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
