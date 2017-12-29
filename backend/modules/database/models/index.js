import fileUploadModel from "./fileUploadModel";
import fileUploadContentsModel from "./fileUploadContentsModel";
import budgetTypeModel from "./budgetTypesModel";
import ledgerModel from "./ledgerModel";
import mappingModel from "./mappingModel";

export default Object.assign(
  {},
  {
    FileUploadModel: fileUploadModel,
    FileUploadContentsModel: fileUploadContentsModel,
    BudgetTypeModel: budgetTypeModel,
    LegderModel: ledgerModel,
    MappingModel: mappingModel
  }
);
