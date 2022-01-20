const mongoose = require('mongoose');

const MONGOLAB_URI = process.env.NODE_ENV == 'test' ? process.env.MONGOLAB_URI_TEST : process.env.MONGOLAB_URI_DEV;

module.exports = {
  connect: () => {
    // Connecting to the database
    mongoose
      .connect(MONGOLAB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log('Successfully connected to database');
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log('database connection failed. exiting now...');
        // eslint-disable-next-line no-console
        console.error(error);
        process.exit(1);
      });
  },

  disconnect: async () => {
    mongoose.connection.close();
  }
};