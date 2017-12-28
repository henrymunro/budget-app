const debug = require("debug")("express-mongo:d");
const debugSilly = require("debug")("express-mongo:silly");
const sendStack = require("../config").SERVER.NODE_ENV !== "production";

module.exports = function apiRoute(Schema) {
  /*
* GET /uri route to retrieve all the entries.
*/
  function getEntries(
    req,
    res,
    next,
    { clause = { endDate: null }, sort = {}, fields = {}, limit, skip } = {}
  ) {
    debug("Request recieved to get entries: ", req.originalUrl);
    debugSilly(
      `Request recieved to get entries, clause: ${clause}, sort: ${sort}, fields: ${fields}`
    );
    // Query the DB and if no errors, send all the books
    const query = Schema.find(clause)
      .select(fields)
      .sort(sort)
      .limit(limit)
      .skip(skip);
    query.exec((err, output) => {
      if (err) {
        debug("Error getting entries: ", err);
        sendStack
          ? res.send(err)
          : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
      }
      // If no errors, send them back to the client
      res.json(output);
    });
  }

  /*
* POST /uri to save a new entry.
*/
  function postEntries(req, res) {
    return new Promise((resolve, reject) => {
      debug("Request recieved to save new entry: ", req.originalUrl);
      debugSilly(`Request recieved to save new entry, vaule: ${req.body}`);
      // Creates a new account
      const newEntry = new Schema(req.body);
      // Save it into the DB.
      newEntry.save((err, entry) => {
        if (err) {
          debug("Error saving entry: ", err);
          sendStack
            ? res.send(err)
            : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
          reject(err);
        } else {
          // If no errors, send it back to the client
          res.json({
            message: "Entry successfully added!",
            success: true,
            entry
          });
          resolve(entry);
        }
      });
    });
  }

  /*
* GET /uri/:id route to retrieve an entry given its id.
*/
  function getEntryByID(req, res) {
    debug("Request recieved to get entry by id: ", req.originalUrl);
    debugSilly(`Request recieved to get entry by id, id: ${req.params.id}`);

    const query = Schema.find({ _id: req.params.id });
    query.exec((err, entry) => {
      if (err) {
        debug("Error getting entry by id: ", err);
        sendStack
          ? res.send(err)
          : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
      }
      // If no errors, send it back to the client
      res.json(entry);
    });
  }
  /*
* GET /uri/:id route to retrieve an entry given its id.
*/
  const getEntryByParam = param => (req, res) => {
    debug("Request recieved to get entry by param: ", req.originalUrl);
    debugSilly(
      `Request recieved to get entry by param, param: ${param}, value: ${
        req.params[param]
      }`
    );

    const query = Schema.find({ [param]: req.params[param] });
    query.exec((err, entry) => {
      if (err) {
        debug("Error getting entry by param: ", err);
        sendStack
          ? res.send(err)
          : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
      }
      // If no errors, send it back to the client
      res.json(entry);
    });
  };

  /*
* DELETE /uri/:id to delete an entry given its id.
*/
  function deleteEntry(req, res) {
    debug("Request recieved to cease entry by id: ", req.originalUrl);
    debugSilly(`Request recieved to cease entry by id, id: ${req.params.id}`);
    _performDatabaseUpdate(req, res, { endDate: new Date() });
  }

  /*
* PUT /Account/:id to update an account given its id
*/
  function updateEntry(req, res) {
    debug("Request recieved to update entry by id: ", req.originalUrl);
    debugSilly(`Request recieved to update entry by id, id: ${req.params.id}`);
    _performDatabaseUpdate(req, res, req.body);
  }

  function _performDatabaseUpdate(req, res, update) {
    debugSilly(
      `Performing database update, id: ${req.params.id}, update: ${update}`
    );
    Schema.findById({ _id: req.params.id }, (err, entry) => {
      if (err) {
        debug("Error getting entry by id: ", err);
        sendStack
          ? res.send(err)
          : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
      }
      Object.assign(entry, update).save((err, entry) => {
        if (err) {
          debug("Error updating entry by id: ", err);
          sendStack
            ? res.send(err)
            : res.send({ error: true, msg: "An error has occoured" }); // Only send stack in dev
        }
        res.json({ message: "Entry updated!", success: true, entry });
      });
    });
  }

  function updateMultipleEntries(req, res) {
    debug("Request recieved update multiple entries by id: ", req.originalUrl);
    _performMultipleDatabaseUpdate(req, res, req.body);
  }

  function _performMultipleDatabaseUpdate(req, res, updates) {
    const updatesPromise = updates.map((update, key) => {
      debug("Performing database update, id: ", update._id);
      debugSilly(
        `Performing database update, id: ${update._id}, update: ${update}`
      );
      return new Promise((resolve, reject) => {
        Schema.findById({ _id: update._id }, (err, entry) => {
          if (err) {
            debug("Error getting entry by id: ", err);
            sendStack
              ? reject(err)
              : reject({ error: true, msg: "An error has occoured" }); // Only send stack in dev
          }
          Object.assign(entry, update).save((err, entry) => {
            if (err) {
              debug("Error updating entry by id: ", err);
              sendStack
                ? reject(err)
                : reject({ error: true, msg: "An error has occoured" }); // Only send stack in dev
            }
            resolve({ message: "Entry updated!", success: true, entry });
          });
        });
      });
    });
    Promise.all(updatesPromise)
      .then(result => {
        res.json({ message: "Entries updated!", success: true, result });
      })
      .catch(err => {
        sendStack
          ? res.send(err)
          : res.send({ error: true, msg: "An error has occoured" });
      });
  }

  return {
    getEntries,
    postEntries,
    getEntryByID,
    getEntryByParam,
    deleteEntry,
    updateEntry,
    updateMultipleEntries
  };
};
