const express = require('express');
const path = require('path') 
const app = express();
require('./bootstrap')(app);
require('./routes')(app);

module.exports = () => {
    const port = process.env.APP_PORT;
    app.listen(port, () => {
        console.log(`=====>app in running in port ${port}<=====`)
    });
}