import { api, URLs } from "../axios";

export const getBudgetTypes = () => api.get(URLs.budgetType);

export const saveNewBudgetType = budgetType =>
  api.post(URLs.budgetType, budgetType);

export const deleteBudgetType = _id => api.delete(`${URLs.budgetType}/${_id}`);

export const updateBudgetType = updates =>
  api.put(`${URLs.budgetType}/${updates._id}`, updates);
