// @flow
import { request, response } from "express";

import type { GetOptionsType } from "../../database";

const debug = require("debug")("database:interface");
const { Schema } = require("mongoose");
const sendStack = require("../../../config").SERVER.NODE_ENV !== "production";

export default class ExpressDatabaseInterface {
  Model: Schema;

  constructor(Model: Schema) {
    this.Model = Model;
  }

  /* GET */
  async getEntries(
    req: request,
    res: response,
    next: () => void,
    options: GetOptionsType = {}
  ) {
    debug("Request recieved to get entries: ", req.originalUrl);
    let { clause, sort, fields, limit, skip } = options;
    clause = clause || { endDate: null };
    sort = sort || {};
    fields = fields || {};
    let output;
    try {
      output = await this.Model.find(clause)
        .select(fields)
        .sort(sort)
        .limit(limit)
        .skip(skip);
    } catch (err) {
      debug("Error getting entries: ", err);
      return this._sendError(res, err);
    }
    return res.json(output);
  }

  /* POST */
  async postEntries(req: request, res: response) {
    debug("Request recieved to save new entry: ", req.originalUrl);
    let output;
    try {
      output = await this.Model.create(req.body);
    } catch (err) {
      debug("Error saving entries: ", err);
      return this._sendError(res, err);
    }
    return res.json(output);
  }

  /* DELETE */
  async deleteEntry(req: request, res: response) {
    debug("Request recieved to cease entry by id: ", req.originalUrl);
    this._performDatabaseUpdate(req, res, { endDate: new Date() });
  }

  /* PUT */
  async updateEntry(req: request, res: response) {
    debug("Request recieved to update entry by id: ", req.originalUrl);
    this._performDatabaseUpdate(req, res, req.body);
  }

  async updateEntries(req: request, res: response) {
    debug("Request recieved to update entries: ", req.originalUrl);
    const promises = req.body.map(update => {
      return this.Model.update({ _id: update._id }, update);
    });
    Promise.all(promises)
      .then(output => {
        return res.json(output);
      })
      .catch(err => {
        debug("Error performing database update: ", err);
        return this._sendError(res, err);
      });
  }

  // Perform general DB update
  async _performDatabaseUpdate(req: request, res: response, update: {}) {
    const _id = req.params.id;
    debug(`Performing database update, id: ${_id}`);
    if (typeof _id !== "string") {
      debug("Error perfoming update no id found");
      return this._sendError(res, "No id found");
    }
    let output;
    try {
      output = await this.Model.update({ _id }, update);
    } catch (err) {
      debug("Error performing database update: ", err);
      return this._sendError(res, err);
    }

    if (!output._id) output._id = _id;
    return res.json(output);
  }

  _sendError(res: response, err: any) {
    return sendStack
      ? res.status(500).send(err)
      : res.status(500).send({ error: true, msg: "An error has occoured" });
  }
}
