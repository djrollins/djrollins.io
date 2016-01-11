var express = require("express"),
    port = process.env.PORT;
 
var server = express().use(
        express.static(__dirname + "/content")
).listen(port, function() {
    console.log('server listening on port ' + port);
});
