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
            return rover.direction = "L";
            //+1 to the left 
            break;
        case "R":
            return rover.direction = "L";
            //+1 to the left 
            break;
        case "L":
            //+1 to the left
            break;
    }
;}

function turnRight(rover){
    switch(rover.direction){
        case "N":
            return rover.direction = "R";
            //+1 to the right
            break;

            
        case "L":
            return rover.direction = "R";
            //+1 to the right
            break;
                
        case "R":
            //+1 to the right
            break;
    }
;}

turnRight(rover);
console.log(rover.direction);