let snake = [{ x: 200, y: 200 }];
let food = { x: 300, y: 300 };
let dx = 10;
let dy = 0;
let canvas, ctx;
let gameInterval;

function initializeGame() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');

    // Slow down the snake by increasing the time interval
    const gameSpeed = 200;

    function drawSnake() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'green';
        snake.forEach(segment => {
            ctx.fillRect(segment.x, segment.y, 10, 10);
        });

        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, 10, 10);
    }

    function moveSnake() {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy };

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = {
                x: Math.floor(Math.random() * (canvas.width / 10)) * 10,
                y: Math.floor(Math.random() * (canvas.height / 10)) * 10,
            };
        } else {
            snake.pop();
        }

        if (
            head.x < 0 || head.x >= canvas.width ||
            head.y < 0 || head.y >= canvas.height ||
            snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
        ) {
            alert('Game Over!');
            clearInterval(gameInterval);
        }
    }

    function gameLoop() {
        moveSnake();
        drawSnake();
    }

    gameInterval = setInterval(gameLoop, gameSpeed);

    // Use WebGazer for gaze-controlled movement
    webgazer.setGazeListener((data) => {
        if (!data) return;
        const x = data.x;
        const y = data.y;

        if (x < canvas.width / 3) {
            dx = -10;
            dy = 0;
        } else if (x > canvas.width * 2 / 3) {
            dx = 10;
            dy = 0;
        } else if (y < canvas.height / 3) {
            dx = 0;
            dy = -10;
        } else if (y > canvas.height * 2 / 3) {
            dx = 0;
            dy = 10;
        }
    }).begin();
}

// Initialize game once calibration is complete
initializeGame();
