const car = {
    model : "lamborghini",
    speed : 270 + "mph",
    color : "black",

    accelarate  : function(){
        console.log(" accelarate the car ");
    },
    handbrake : function(){
        console.log( "pull the hand brakes")
    }
}

car.model;
console.log(car.speed);
console.log(car.color);

car.accelarate();
car.handbrake();