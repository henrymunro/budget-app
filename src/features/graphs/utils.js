// @flow

export const mapData = (
  data: Array<any>,
  nameKey: string = "name",
  valueKey: string = "value",
  zeroNulls: boolean = false
) => {
  return data
    .map(entry => {
      const value = entry[valueKey];
      return {
        name: entry[nameKey],
        value: zeroNulls ? (value < 0 ? -1 * value : 0) : value
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};
