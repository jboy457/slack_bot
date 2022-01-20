'use strict'

require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const routes = require('./routes');
const database = require('./config/database');
database.connect()

const startServer = async () => {
    try {
        const app = express();

        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morgan('dev'));
        app.use(routes);
    
        const PORT = process.env.PORT;
        app.listen(PORT, (err) => {
            if(err) {
                console.log(err);
                return;
            }
            console.log(`Bot listenenig on port ${PORT}`)
        })
    } catch (err) {
        console.log(err);
    } 
}


startServer();