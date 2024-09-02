import http from 'http';
import app from './app';

const server = http.createServer(app);


const PORT = 3005;
const URL = "";

server.listen(PORT, ()=>{
    console.log("Server started istening on port", PORT);
});


// package.js script commands replace this with your cuurent script

// "build": "tsc -p ./",
// "dev:server": "nodemon --watch './**/*.ts' --exec 'ts-node' src/server.ts",
// "dev": "ts-node-dev --respawn ./src/index.ts"