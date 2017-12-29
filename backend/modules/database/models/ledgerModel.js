import { mongoose } from "../databaseConnection";
const Schema = mongoose.Schema;

export default mongoose.model(
  "ledger",
  new Schema(
    {
      _fileUploadId: { type: Schema.Types.ObjectId, required: true },
      _fileUploadContentsId: { type: Schema.Types.ObjectId, required: true },
      _budgetTypeId: { type: Schema.Types.ObjectId, required: true },
      date: { type: Date, required: true },
      description: { type: String, required: true },
      userDescription: { type: String, default: "" },
      budgetType: { type: String },
      budgetSubType: { type: String },
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
