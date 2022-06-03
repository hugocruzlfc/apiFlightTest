const mongoose = require('mongoose');

const stringConnection = process.env.DB_URI;

module.exports = () => {
  const connect = () => {
    mongoose
      .connect(stringConnection, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(db => console.log('Database connected'))
      .catch(err => console.log(err));
  };

  connect();
};
