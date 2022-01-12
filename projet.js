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
    x : 0,
    y : 0
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
                
                };}


