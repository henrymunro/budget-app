import axios from "axios";

const config = {
  serverURL: "http://localhost:4000"
};

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
