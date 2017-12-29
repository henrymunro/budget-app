import { mongoose } from "../databaseConnection";
const Schema = mongoose.Schema;

export default mongoose.model(
  "fileUpload",
  new Schema(
    {
      currency: { type: String, default: "£" },
      uploadTime: { type: Date, required: true },
      tags: { type: Array },
      fileName: { type: String, required: true },
      lastModifiedDate: { type: Date },
      size: { type: Number },
      fileType: { type: String },
      otherDetails: { type: Object },
      endDate: { type: Date }
    },
    {
      timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
      }
    }
  )
);
