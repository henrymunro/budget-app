import { mongoose } from "../databaseConnection";
const Schema = mongoose.Schema;

export default mongoose.model(
  "fileUploadContents",
  new Schema(
    {
      _fileUploadId: { type: Schema.Types.ObjectId, required: true },
      date: { type: Date, required: true },
      description: { type: String, required: true },
      amount: { type: Number, default: 0.0 },
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
