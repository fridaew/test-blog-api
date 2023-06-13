// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();
// const cors = require('cors');


// const port = process.env.PORT || 3001

// server.use(cors());
// server.use(middlewares);
// server.use(router);

// server.listen(port);

const jsonServer = require('json-server');

const auth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db;
server.use(auth);
server.use(router); // Use '/api' as the base URL for your API

const port = process.env.PORT || 3001;
server.listen(port)
