"use strict";

const joi = require("joi");

const envVarsSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(["development", "staging", "production", "test"])
      .required(),
    APP_NAME: joi.string().default("budget-app-backend"),
    LOG_DIR: joi.string().default("log"),
    LOGGER_ENABLED: joi
      .boolean()
      .truthy("TRUE")
      .truthy("true")
      .falsy("FALSE")
      .falsy("false")
      .default(true),
    LOGGER_LEVEL: joi
      .string()
      .allow(["error", "warn", "info", "verbose", "debug", "silly"])
      .default("info")
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  SERVER: {
    NODE_ENV: envVars.NODE_ENV,
    APP_NAME: envVars.APP_NAME,
    LOGGER: {
      LOG_DIR: envVars.LOG_DIR,
      LEVEL: envVars.LOGGER_LEVEL,
      ENABLED: envVars.LOGGER_ENABLED
    }
  }
};

module.exports = config;
