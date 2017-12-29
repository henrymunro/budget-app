import { mongoose } from "../databaseConnection";
const Schema = mongoose.Schema;

export default mongoose.model(
  "budgetType",
  new Schema(
    {
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
