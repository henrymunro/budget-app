// @flow

import { Map } from "immutable";

import FileUpload from "features/fileUpload/models/FileUpload";
import BudgetType from "features/budgetTypes/models/BudgetTypeContainer";

export type State = {
  fileUpload: Map<string, FileUpload>,
  budgetType: Map<string, BudgetType>
};
