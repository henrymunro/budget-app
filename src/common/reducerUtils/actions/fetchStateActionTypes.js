// @flow

export default (name: string, path: string = "budget/") => {
  const capsName = name.toUpperCase();
  const fetchActionTypes = {
    [`FETCH_${capsName}`]: `${path}FETCH_${capsName}`,
    [`FETCH_${capsName}_PENDING`]: `${path}FETCH_${capsName}_PENDING`,
    [`FETCH_${capsName}_FULFILLED`]: `${path}FETCH_${capsName}_FULFILLED`,
    [`FETCH_${capsName}_ERROR`]: `${path}FETCH_${capsName}_ERROR`
  };

  return fetchActionTypes;
};
