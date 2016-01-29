// Function that creates a car object.

function newCar(carMake, carModel, carYear) {

  var speed = 0;
  var maxSpeed = 85;
  var brakeRate = Math.floor((Math.random()*6) + 5); //sets to a random rate between 5 and 10
  var accelerateRate = Math.floor((Math.random()*21) + 10); //sets to a random rate between 10 and 30
  var stillMoving = true;

  return {
    make: carMake,
    model: carModel,
    year: carYear,

    //Function to print out the car's stats
    getCarStats: function(){
      console.log("Your car is a " + this.year + " " + this.make + " " + this.model + " with a maximum speed of " + maxSpeed + ". You can accelerate at a rate of " + accelerateRate + " mph. You can brake at a rate of " + brakeRate + " mph.");
    },

    // Allows user to set what the max speed of the car is.
    setMaxSpeed: function(newMax) {
      maxSpeed = newMax;
    },

    //Function to allow user to accelerate up to a preset maximum speed.
    accelerate: function() {
      if (speed === maxSpeed)
      {
        console.log("You can't go any faster!!");
      }
      else if(accelerateRate <= (maxSpeed - speed))
      {
        speed += accelerateRate;
      }
      else
      {
        speed = maxSpeed;
        console.log("You've hit your max speed of " + maxSpeed + ". Don't even try to go faster.");
      }
    },
    //Function to allow user to brake to a stop.
    brake: function() {
      if (speed === 0)
      {
        console.log("You are already at a dead stop.");
      }
      else if(brakeRate <= speed)
      {
        speed -= brakeRate;
      }
      else
      {
        speed = 0;
        console.log("You've come to a complete stop.");
      }
    },
    //Function to return the current speed of the car.
    odometer: function() {
      return speed;
    }
  };
};


var shaneCar = newCar("Subaru", "Wrx Sti", 2016);
// shaneCar.setMaxSpeed(90);
var kristaCar = newCar("Honda", "CRV", 2006);


// Function to speed up to a 70 and brake to zero.
function accelDecel(car, mxspd) {
  car.setMaxSpeed(mxspd);
  car.getCarStats();
  while(car.odometer() < mxspd) {
    car.accelerate();
    console.log("You are driving at a speed of " + car.odometer() + "mph.")
  };
  while(car.odometer() > 0) {
    car.brake();
    console.log("You are driving at a speed of " + car.odometer() + "mph.")
  };
  car.brake();
};


accelDecel(kristaCar, 100);
