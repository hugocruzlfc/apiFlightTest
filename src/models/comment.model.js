const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const CommentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      require: true,
    },
    tags: {
      type: String,
      enum: ['Very important', 'Important', 'Less important'],
    },
    userId: {
      type: String,
      require: true,
    },
    flightId: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

CommentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Comment', CommentSchema);
