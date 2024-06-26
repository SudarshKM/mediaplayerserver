import jsonServer from "json-server" ;

// const jsonServer = require("json-server")

// create path for db.json file using router funtion  - for storing data

const router = jsonServer.router("db.json")

// create middleware to convert json to js - defaults()

const middleware = jsonServer.defaults()

// create json-server

const mediaplayerserver = jsonServer.create()

// server should use middleware and router

mediaplayerserver.use(middleware);
mediaplayerserver.use(router);

// set port for server

const PORT = 3000 || process.env.PORT

// run server

mediaplayerserver.listen(PORT , ()=>{
    console.log(`server started at ${PORT}`);
})