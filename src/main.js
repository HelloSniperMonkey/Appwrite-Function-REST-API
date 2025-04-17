import AppExpress from "@itznotabug/appexpress";
const app = new AppExpress();

app.views('views');
// make sure to add correct content-types.
htmlString = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        body {
            background-color: #A9F0D1;
            text-align: center;
        }

        .container {
            height: 70vh;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;

        }

        #board {
            height: 60vmin;
            width: 60vmin;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 1.5vmin;
        }

        .box {
            height: 18vmin;
            width: 18vmin;
            border-radius: 1rem;
            border: none;
            box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
            font-size: 8vmin;
            color: #fff7f8;
            background-color: #ff7e6b;
        }

        #reset {
            padding: 1rem;
            font-size: 1.25rem;
            background-color: #191913;
            color: #ffffff;
            border-radius: 1rem;
            border: none;
        }

        .msg_container {
            height: 2vh;
        }

        #new {
            padding: 1rem;
            font-size: 1.25rem;
            background-color: #191913;
            color: #ffffff;
            border-radius: 1rem;
            border: none;
        }

        .message {
            color: crimson;
            font-size: 3rem;
            padding-bottom: 10px;
        }

        .hide {
            display: none;
        }

        #status {
            height: 4vh;
            display: flex;
            justify-content: center;
            align-items: top;
        }

        #link {
            display: inline-block;
            padding: 0%;
        }

        #share {
            padding: 1rem;
            font-size: 1.25rem;
            background-color: #191913;
            color: #ffffff;
            border-radius: 1rem;
            border: none;
        }
    </style>
</head>

<body>
    <div class="msg_container"></div>
    <a id="link" href="https://tic-tac-toe-a6yt.onrender.com/create" target="_blank">
        <button id="new">New Game</button>
    </a>
    <button id="share">Share Game Session</button> <!-- New share button -->
    <main>
        <h1>Tic Tac Toe</h1>
        <div id="status"></div>
        <p id="player">you are : </p>
        <p class="message hide"> is Winner</p>
        <div class="container">
            <div id="board">
                <button class="box" data-index="0"></button>
                <button class="box" data-index="1"></button>
                <button class="box" data-index="2"></button>
                <button class="box" data-index="3"></button>
                <button class="box" data-index="4"></button>
                <button class="box" data-index="5"></button>
                <button class="box" data-index="6"></button>
                <button class="box" data-index="7"></button>
                <button class="box" data-index="8"></button>
            </div>
        </div>
    </main>
    <button id="reset">Reset Game</button>
</body>
</html>`
app.get('/', (request, response) => response.text(htmlString, 200, 'text/html'));


export default async (context) => await app.attach(context);
