// @flow
import { Record, List } from "immutable";

import SaveFileEntry from "./SaveFileEntry";

export type SaveFileType = {
  content: List<SaveFileEntry>,
  currency: "£" | "$",
  uploadTime: date,
  tags: List<string>
};

export default class SaveFile extends Record({
  content: List([]),
  currency: "£",
  uploadTime: "",
  tags: List([])
})<FileUploadType> {}
