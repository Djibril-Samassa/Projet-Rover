const grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " n", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "]
];

console.table(grid);

let rover = {
    direction : "N",
    y : grid[1],
    x : grid[1][4]
};


function turnLeft(rover){
    switch(rover.direction){
        case "N":
            return rover.direction = "W";
            // North to West
            break;

        case "W":
            return rover.direction = "S";
            //West to South
            break;

        case "S":
            return rover.direction = "E";
            //South to East
            break;

        case "E":
            return rover.direction = "N"
            //East to North
            break;
    }
;}

function turnRight(rover){
    switch(rover.direction){
        case "N":
            return rover.direction = "E";
            //North to East
            break;  

        case "E":
            return rover.direction ="S";
            //East to South
            break;

        case "S":
            return rover.direction = "W";
            //South to West
            break;
            
        case "W":
            return rover.direction = "N";
            //West to North
            break;
    }
;}


function moveForward(rover) {
    switch (rover.direction) {

        case "N":
            if (rover.y === 0 ){
                console.log ('Message: error');
            }
            else {
                console.log("cv");
                rover.y = -1;
            }
            break;

        case "S":
            if (rover.y === 9) {
                console.log ('Message: error');
                console.log (`${rover.x},${rover.y}`);
            }
            else {
                rover.y++;
                console.log (`${rover.x},${rover.y}`);
            }
            
            break;

        case "W":
            if (rover.x === 0) {
                console.log ('Message: error');
                console.log (`${rover.x},${rover.y}`);
            }
            else {
                rover.x--;
                console.log (`${rover.x},${rover.y}`);
            }
            
            break;

        case "E":
            if (rover.x === 9 ) {
                console.log ('Message: error');
                console.log (`${rover.x},${rover.y}`);
            }
            else {
                rover.x++;
                console.log (`${rover.x},${rover.y}`);
            }
            
            break;
    }
};

console.log(rover.y);
moveForward(rover);
console.log(rover.y);