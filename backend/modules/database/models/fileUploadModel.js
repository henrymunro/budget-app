const { mongoose } = require("../databaseConnection");
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model(
  "fileUpload",
  new Schema(
    {
      username: { type: String, required: true }
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
      }
    }
  )
);
