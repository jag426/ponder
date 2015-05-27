    /* Point Array */
	var ySize = 50; //number of points in y dimension
	var xSize = Math.floor(ySize*window.innerWidth/window.innerHeight); //number of points in the x dimension
	var yDist = window.innerHeight/(ySize-1); //vertical distance between points
	var xDist = window.innerWidth/(xSize-1); //horizontal distance between points
    var point = new Array(xSize);
	for (var i = 0; i < xSize; i++) {
            point[i] = new Array(ySize);
			for (var j = 0; j < ySize; j++) {
				point[i][j] = new Point(i,j,i*xDist, j*yDist);
			}
    }
	/*point[0] = new Array(100);
    point[0][0] = new Point(100, 100); // x location of target, y location of target
    point[1] = new Point(200, 350);
    point[2] = new Point(400, 350);
    point[3] = new Point(320, 250);
    point[4] = new Point(440, 190);
    point[5] = new Point(100, 350);
    point[6] = new Point(80, 120);
    point[7] = new Point(130, 240);*/


    /* Point OBJECT */
    function Point(i,j,newX, newY) {
        var x = newX;
        var y = newY;
		var nextX = x
		var nextY = y
        var radius = 2;
        var targetColour = "blue";

        /* public methods */
        this.draw = draw;

        function draw() {
			x = nextX
			y = nextY
            g.beginPath();
            g.fillStyle = targetColour;
            g.arc(x, y, radius, 0, Math.PI * 2);
            g.fill();
            g.closePath();
        }


        this.setX = setX;

        function setX(newX) {
            x = newX;
        }

        this.getX = getX;

        function getX() {
            return x;
        }

        this.setY = setY;

        function setY(newY) {
            y = newY;
        }

        this.getY = getY;

        function getY() {
            return y;
        }

        this.getRadius = getRadius;

        function getRadius() {
            return radius;
        }

        this.move = move;

        function move() {
			
        }

    }




    /* MAIN GAME */
    function playGame() {
        g.clearRect(0, 0, canvas.width, canvas.height); //Clear canvas at start.
		g.canvas.width  = window.innerWidth;
		g.canvas.height = window.innerHeight;
        //player.draw();

        for (var i = 0; i < xSize; i++) {
			for (var j = 0; j < ySize; j++){
				point[i][j].move();
				point[i][j].draw();
			}
        }

        // draw the score
        drawElapsedTime();

    }
    /* SCORE */
    var startTime;
    // ending elapsed time in seconds
    var score;

    



    function click(e) {
    }

    document.addEventListener('click', click);


    /* Get the canvas id */
    var canvas = document.getElementById("simpleCanvas");


    /* Assign a graphics context to the canvas, so that we can draw on it */
    var g = canvas.getContext("2d");

    /* Do the function, call every 20 milliseconds*/
    startTime = new Date();
    var theInterval = setInterval(playGame, 20);