'use strict'

const app = require('./src/app');

const startServer = async () => {
    try {
        const PORT = process.env.PORT || 3000;
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