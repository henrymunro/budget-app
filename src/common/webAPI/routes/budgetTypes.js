import { api, URLs } from "../axios";

export const getBudgetTypes = () => api.get(URLs.budgetType);

export const saveNewBudgetType = budgetType =>
  api.post(URLs.budgetType, budgetType);

export const deleteBudgetType = _id => api.delete(`${URLs.budgetType}/${_id}`);
