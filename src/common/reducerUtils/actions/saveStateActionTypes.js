// @flow

export default (name: string, path: string = "budget/") => {
  const capsName = name.toUpperCase();
  const saveActionTypes = {
    [`SAVE_${capsName}`]: `${path}SAVE_${capsName}`,
    [`SAVE_${capsName}_PENDING`]: `${path}SAVE_${capsName}_PENDING`,
    [`SAVE_${capsName}_FULFILLED`]: `${path}SAVE_${capsName}_FULFILLED`,
    [`SAVE_${capsName}_ERROR`]: `${path}SAVE_${capsName}_ERROR`
  };

  return saveActionTypes;
};
