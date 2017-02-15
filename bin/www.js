"use strict";
var server_1 = require('../server');
server_1.default.listen(1337, 'localhost', function (err) {
    if (err) {
        console.log('error starting server', +err);
        return;
    }
    console.log('server started succesfully on http://localhost:1337');
});
//# sourceMappingURL=www.js.map