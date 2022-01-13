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


let rover = {
    direction : "S",
    y : 0,
    x : 1
};

grid[rover.y][rover.x] = rover.direction;

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


function moveForward (rover){
    switch(rover.direction){
        case "N": 
            if (rover.y === 0){
                console.log("error");
            }
            else{
                grid[rover.y][rover.x] = " ";
                rover.y -= 1;
                grid[rover.y][rover.x] = "N";
                console.table(grid);
            break;
            }

            case "S": 
            if (rover.y === 9){
                console.log("error");
            }
            else{
                grid[rover.y][rover.x] = " ";
                rover.y += 1;
                grid[rover.y][rover.x] = "S";
                console.table(grid);
            break;
            }
    }
}

console.table(grid);
moveForward(rover);
moveForward(rover);
moveForward(rover);
moveForward(rover);
