"use strict";
var express = require('express');
var app = express();
var authRoutes_1 = require('./routes/authRoutes');
app.use('/api/auth', authRoutes_1.default);
{
    app.get('/test', function (req, res) {
        res.send('test successfully called');
    });
    app.post('/api/signup');
    exports.default = app;
}
//# sourceMappingURL=server.js.map