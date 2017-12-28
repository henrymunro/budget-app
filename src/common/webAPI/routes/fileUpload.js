import { api, URLs } from "../axios";

export const getUploadedFiles = () => api.get(URLs.fileUpload);

export const saveUploadedFile = file => api.post(URLs.fileUpload, file);
