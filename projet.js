const grid = [
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
	[" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
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
    y : grid[0],
    x : grid[0][0]
};

function turnLeft(rover){
    switch(rover.direction){
        case "N":
            return rover.direction = "W";
            //+1 to the left
            break;

        case "W":
            return rover.direction = "S";
            //+1 to the left 
            break;

        case "S":
            return rover.direction = "E";
            //+1 to the left
            break;

        case "E":
            return rover.direction = "N"
            //+1 to the left
            break;
    }
;}

function turnRight(rover){
    switch(rover.direction){
        case "N":
            return rover.direction = "E";
            //+1 to the right
            break;  

        case "E":
            return rover.direction ="S";
            //+1 to the right
            break;

        case "S":
            return rover.direction = "W";
            //+1 to the right
            break;
            
        case "W":
            return rover.direction = "N";
            //+1 to the right
            break;
    }
;}

function moveForward(rover) {
    switch (rover.direction) {
        case rover.direction = "N":
            if (rover.y === 0) {
                return rover.x , rover.y;
            }
            else {
                rover.y--;
                return rover.x , rover.y;
            }
            
            break;

        case rover.direction = "S":
            if (rover.y === 9) {
                return rover.x , rover.y;
            }
            else {
                rover.y++;
                return rover.x , rover.y;
            }
            
            break;

        case rover.direction = "W":
            if (rover.x === 0) {
                return rover.x , rover.y;
            }
            else {
                rover.x--;
                return rover.x , rover.y;
            }
            break;

        case rover.direction = "E":
            if (rover.x === 0) {
                return rover.x , rover.y;
            }
            else {
                rover.x++;
                return rover.x , rover.y;
            }
            
            break;
    }
};

console.log(moveForward(rover));