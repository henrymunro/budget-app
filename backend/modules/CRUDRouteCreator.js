// @flow

import { request, response } from "express";

import { ExpressDatabaseInterface } from "./database";
import type { GetOptionsType } from "./database";

const { Schema } = require("mongoose");
const { Router } = require("express");

type createCRUDRoutesType = {
  getOptions: GetOptionsType
};

// @flow

export default class CRUDRouteCreator {
  apiRoute: Router;
  route: string;
  Model: Schema;

  constructor(apiRoute: Router, route: string, Model: Schema) {
    this.apiRoute = apiRoute;
    this.route = route;
    this.Model = Model;
  }

  createCRUDRoutes({ getOptions }: createCRUDRoutesType) {
    const EDBI = new ExpressDatabaseInterface(this.Model);

    this.apiRoute
      .route(this.route)
      .get((req: request, res: response, next: () => void) =>
        EDBI.getEntries(req, res, next, getOptions)
      )
      .post(function(req: request, res: response) {
        return EDBI.postEntries(req, res);
      });

    this.apiRoute
      .route(`${this.route}/multiple`)
      .put(function(req: request, res: response) {
        return EDBI.updateEntries(req, res);
      });

    this.apiRoute
      .route(`${this.route}/:id`)
      .delete(function(req: request, res: response) {
        return EDBI.deleteEntry(req, res);
      })
      .put(function(req: request, res: response) {
        return EDBI.updateEntry(req, res);
      });
  }
}
