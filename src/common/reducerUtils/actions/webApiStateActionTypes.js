// @flow

export default (
  name: string,
  path: string = "budget/",
  callType: string = "FETCH"
) => {
  const capsName = name.toUpperCase();
  let callTypeCaps = callType.toUpperCase();

  if (
    ["FETCH", "SAVE", "DELETE", "UPDATE", "MULTIUPDATE"].indexOf(
      callTypeCaps
    ) <= 0
  )
    callTypeCaps = "FETCH";

  return {
    [`${callTypeCaps}_${capsName}`]: `${path}${callTypeCaps}_${capsName}`,
    [`${callTypeCaps}_${capsName}_PENDING`]: `${path}${callTypeCaps}_${capsName}_PENDING`,
    [`${callTypeCaps}_${capsName}_FULFILLED`]: `${path}${callTypeCaps}_${capsName}_FULFILLED`,
    [`${callTypeCaps}_${capsName}_ERROR`]: `${path}${callTypeCaps}_${capsName}_ERROR`
  };
};
