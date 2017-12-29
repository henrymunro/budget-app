import { mongoose } from "../databaseConnection";
const Schema = mongoose.Schema;

export default mongoose.model(
  "mapping",
  new Schema(
    {
      mapping: { type: String, required: true },
      _typeId: { type: Schema.Types.ObjectId, required: true },
      type: { type: String, required: true },
      subType: { type: String, required: true },
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
