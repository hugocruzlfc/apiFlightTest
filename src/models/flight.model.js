const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const FlightSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
    },
    name: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

FlightSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Flights', FlightSchema);
