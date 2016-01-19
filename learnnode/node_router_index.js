var server = require("./node_router_server");
var router = require("./node_router_router");

server.start(router.route);