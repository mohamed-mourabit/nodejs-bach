const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

// server = http.createServer(app);

// server.listen(PORT, () => console.log(`-runnig in port ${PORT}`));

app.get('*', (req, res, next) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`)
})
