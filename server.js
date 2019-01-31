const express = require('express');
const app = express();
const expressip = require('express-ip');
const PORT = process.env.PORT || 4000;
const path = require('path');

app.use(expressip().getIpInfoMiddleware);


app.set("PORT", PORT);
app.set('trust proxy', true);

app.get('/', function (req, res) {
    res.send(req.connection.remoteAddress);
});

app.listen(app.get('PORT'), function () {
    console.log('Express started on http://localhost:' +
        app.get('PORT') + '; press Ctrl-C to terminate.');
});