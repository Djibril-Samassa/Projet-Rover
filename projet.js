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
    direction : "E",
    y : 2,
    x : 2
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

        //move to the north
        case "N": 
            //check i you can go higher
            if (rover.y === 0){
                console.log("error");
            }
            //go higher and display "N"
            else{
                grid[rover.y][rover.x] = " ";
                rover.y -= 1;
                grid[rover.y][rover.x] = "N";
                console.table(grid);
            }
            break;
        
        //move to the south
        case "S": 
            // check if you can go lower
            if (rover.y === 9){
                console.log("error");
            }
            //go lower and display "S"
            else{
                grid[rover.y][rover.x] = " ";
                rover.y += 1;
                grid[rover.y][rover.x] = "S";
                console.table(grid);
            }
            break;

        //move to the left    
        case "W":
            //check if you can go to the left
            if (rover.x === 0){
                console.log("error");
            }
            //go to the left and display "W"
            else{
                grid[rover.y][rover.x] = " ";
                rover.x -= 1;
                grid[rover.y][rover.x] = "W";
                console.table(grid);
            }
            break;

        case "E":
            //check if you can go to the right
            if (rover.x === 9){
                console.log("error");
            }
            //go to the left and display "E"
            else{
                grid[rover.y][rover.x] = " ";
                rover.x += 1;
                grid[rover.y][rover.x] = "E";
                console.table(grid);
            }
            break;
    }
}

function piloteRover(string){
    while(true){
        if(string = "f"){
            return moveForward(rover);
        }

        else if(string = "l"){
            return turnLeft(rover);
        }

        else if(string = "r"){
            return turnRight(rover);
        }
    }
;}


piloteRover("f");
piloteRover("f");
piloteRover("r");
piloteRover("f");
piloteRover("l");
piloteRover("f");
piloteRover("f");