
 var rover = {
  direction:"N",
  x:0,
  y:0,
};
console.log(rover);

var rover2 = {
  direction:"N",
  x:7,
  y:7,
};
console.log(rover2);

console.log(rover);

function turning() {
	switch (turn) {
		case 'left':
			turnLeft([1]);
			break;

		case 'right':
			turnRight();
			break;
	}

	
}



function turnLeft() {
  switch (rover){
    case "N":
    rover = "W";
    break;

    case "W":
    rover = "S";
    break;

    case "S":
    rover = "E";
    break;

    case "E":
    rover = "N";
    break;
  }
   
}
console.log(rover);

function turnRigth() {
   switch(rover){
     case "N":
     rover ="E";
     break;

     case "E":
     rover = "S";
     break;

     case "S":
     rover = "W";
     break;

     case "W":
     rover = "N";
     break;

   }

}
console.log(rover.direction);
 
function moveForward(){
  switch(rover.direction){
    case "N":
    rover.x;
    rover.y--;
    break;

    case "S":
    rover.x;
    rover.y++;
    break; 

    case "W":
    rover.x--;
    rover.y;
    break;

    case "E":
    rover.x++;
    rover.y;
    break;

   }
}


 function movebackward(rover){
    
  switch (rover.direction){
    case "N":
    rover.x;
    rover.y++;
    break;

    case "S":
    rover.x;
    rover.y--;
    break;


    case "E":
    rover.x++;
    rover.y;
    break;

    case "W":
    rover.x--;
    rover.y;
    break;

  }

}


    
var myGrid = [
  [rover,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,Rock,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,rover2,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  ];
console.log(myGrid);

var Rock = [2,7]
var rover2 = [7,7]

function movement () {
  if(rover.x < 0  || rover.y < 0){
    console.log( "No es posible mover a rover fuera de la cuadrícula.");
  }

  else if (rover.x > 10 || rover.y > 10);{
  console.log("No es posible mover a rover fuera de la cuadrícula.");
  }

  

}

function commands(command) {
	for (var i = 0; i < command.length; i++) {
		switch (command[i]) {
			case 'b':
				movebackwards();
				break;

			case 'f':
				moveForward();
				break;

			case 'r':
				turn = 'right';
				turnRigth();
				break;

			case 'l':
				turn = 'left';
				turnLeft();
				break;
		}
	}
}





console.log("testando los comando" + commands);

// vamos ahora con la función que va recabar los ultimos pasos de nuestro rover.

var travelLog = [];

function registerTravelLog (rover) {
travelLog.push(
  "rover gira" + turn + "hacia el" + " " + rover.direction
);
}

console.log(travelLog);
    


