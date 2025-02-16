const createError = require("http-errors");
const { default: mongoose } = require("mongoose");

const findWithId = async (Model, id, options = {}) => {
  try {
    const item = await Model.findById(id, options);

    if (!item) {
      throw createError(
        404,
        `${Model.modelName} does not exist with this with this id `
      );
    }
    return item;
  } catch (error) {
    if (error instanceof mongoose.Error) {
      next(createError(404, "Invalid item id"));
    }
    throw error;
  }
};

module.exports = { findWithId };
