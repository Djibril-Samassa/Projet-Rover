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


function moveForward(rover){
    switch(rover.direction){
        case rover.direction = "N":
                
            if (rover.y <= 0) {
                console.log ('Message: error');
                return rover.y;
            }
            else  {
                rover.y = "N";
                return rover.y--;
                }        
            break;
    }
    console.table(grid);    
}



moveForward(rover)
console.table(grid);
