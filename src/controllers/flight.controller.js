const flightModel = require('../models/flight.model');
const { handleHttpError } = require('../utils/handleError');

const optionsPaginate = {
  page: 1,
  limit: 10,
};

/**
 *Function that returns all the comments belonging to a FlightId
 * @param {string} (flightId) Identifier of the flight from which comments are to be returned
 * @returns {Array} Returns an array with pagination 10 of all comments pertaining to the flightId
 */

exports.allFlights = async (req, res) => {
  try {
    const allFlights = await flightModel.paginate(optionsPaginate);
    res.send({ status: 200, message: 'OK', allFlights });
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_FLIGHTS', 403);
  }
};
