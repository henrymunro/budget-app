import fileUploadModel from "./fileUploadModel";
import fileUploadContentsModel from "./fileUploadContentsModel";
import budgetTypeModel from "./budgetTypesModel";
import ledgerModel from "./ledgerModel";

export default Object.assign(
  {},
  {
    FileUploadModel: fileUploadModel,
    FileUploadContentsModel: fileUploadContentsModel,
    BudgetTypeModel: budgetTypeModel,
    LegderModel: ledgerModel
  }
);
