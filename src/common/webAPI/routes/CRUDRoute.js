// @flow
import { api, URLs } from "../axios";

export default class APIRoutes {
  route = "";
  api = () => null;

  constructor(route: string) {
    this.route = URLs[route];
    this.api = api;
  }

  consoleLogRoute() {
    console.log("Route: ", this.route);
  }

  fetch() {
    return this.api.get(this.route);
  }

  save(object: Object) {
    return this.api.post(this.route, object);
  }

  delete(_id: string) {
    if (typeof _id === "string") {
      return this.api.delete(`${this.route}/${_id}`);
    } else if (_id && typeof _id._id === "string") {
      return this.api.delete(`${this.route}/${_id._id}`);
    }
    throw new Error("No id passed, could not delete");
  }

  update(updates: Object) {
    if (typeof updates._id === "string") {
      return this.api.put(`${this.route}/${updates._id}`, updates);
    }
    throw new Error("No id passed, could not update");
  }
}
