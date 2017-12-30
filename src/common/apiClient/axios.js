import axios from "axios";

import config from "config.json";

export const URLs = {
  fileUpload: "/fileUpload",
  budgetType: "/budgetType",
  mapping: "/mapping",
  ledger: "/ledger"
};

export const api = axios.create({
  baseURL: config.serverURL + "/api",
  timeout: 5000
});
