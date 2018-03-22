'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', function(req, res) {
    // TODO add more code
    res.sendFile('/index.html', {root: __dirname + '/../../client'});
  });
  server.use(router);
};
