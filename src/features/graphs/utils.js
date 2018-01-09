// @flow

export const mapData = (
  data: Array<any>,
  nameKey: string = "name",
  valueKey: string = "value"
) => {
  return data
    .map(entry => {
      const value = entry[valueKey];
      return {
        name: entry[nameKey],
        value: value < 0 ? -1 * value : 0
      };
    })
    .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
};
