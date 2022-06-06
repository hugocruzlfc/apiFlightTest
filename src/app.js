const express = require('express');
const cors = require('cors');
const initDb = require('./config/database');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
// //Allow api function to apps
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, authorization-token-v1, api-key-v1, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, cache-control',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//MiddleWares Body-Parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// app.use(cors());

//simple route info
app.get('/', (request, response) => {
  response.json({
    info: 'Node.js, Express, MongoDb  API Test',
  });
});

//ROUTES
//Comment
const commentRoutes = require('./routes/comment.route');
app.use('/apiTest/comment', commentRoutes);

//Flight
const flightRoutes = require('./routes/flight.route');
app.use('/apiTest/flight', flightRoutes);

// //swagger doc
app.use(
  '/apiTest/comment/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument),
);

//sent listen port
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log(`API running on port ${PORT}.`);
});

initDb();

module.exports = { app, server };
