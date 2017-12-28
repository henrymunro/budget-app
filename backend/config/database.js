const joi = require("joi");

const envVarsSchema = joi
  .object({
    DATABASE_URL: joi.string().required(),
    DATABASE_URL_PARAMS: joi.string().required(),
    DATABASE_DATABASE: joi.string().required(),
    DATABASE_USERNAME: joi.string().required(),
    DATABASE_PASSWORD: joi.string().required(),
    LOCAL_DB: joi
      .boolean()
      .truthy("TRUE")
      .truthy("true")
      .falsy("FALSE")
      .falsy("false")
      .default(false)
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  DATABASE: {
    URL: envVars.DATABASE_URL,
    URL_PARAMS: envVars.DATABASE_URL_PARAMS,
    DATABASE: envVars.DATABASE_DATABASE,
    USERNAME: envVars.DATABASE_USERNAME,
    PASSWORD: envVars.DATABASE_PASSWORD,
    LOCAL_DB: envVars.LOCAL_DB
  }
};

module.exports = config;
