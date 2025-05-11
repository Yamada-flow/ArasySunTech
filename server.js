const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
  httpAdminRoot: "/admin",
  httpNodeRoot: "/ui",
  userDir: "./.nodered",
  functionGlobalContext: {},
  port: process.env.PORT || 1880
};

RED.init(server, settings);

app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

server.listen(settings.port, () => {
  console.log("Node-RED rodando na porta", settings.port);
});

RED.start();
