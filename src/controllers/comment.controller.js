const commentModel = require('../models/comment.model');
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

exports.commetByFlightId = async (req, res) => {
  const flightIdParam = req.params.flightId;
  console.log(flightIdParam);
  try {
    const allCommentByFlightId = await commentModel.paginate(
      {
        flightId: flightIdParam,
      },
      optionsPaginate,
    );
    res.send({ status: 200, message: 'OK', allCommentByFlightId });
  } catch (e) {
    handleHttpError(res, 'ERROR_GET_COMMENT', 403);
  }
};

/**
 *Function that creates a new comment
 * @param {Object} req Object Request, where comes the data sent from the front to create the comment
 * @param {Object} res Object Response, where the created object is returned
 */

exports.createComment = async (req, res) => {
  const newComment = req.body;
  try {
    const createComment = await commentModel.create(newComment);
    res.send({
      status: 200,
      message: 'OK',
      createComment,
    });
  } catch (e) {
    handleHttpError(res, 'ERROR_CREATE_COMMENT', 403);
  }
};
