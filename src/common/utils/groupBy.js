import moment from "moment";
const _ = require("underscore");

const _calcuateTotalAmount = items =>
  _.reduce(
    items,
    function(memo, node) {
      return memo + Number(node.amount);
    },
    0
  );

let DataGrouper = (function() {
  var has = function(obj, target) {
    return _.any(obj, function(value) {
      return _.isEqual(value, target);
    });
  };

  var keys = function(data, names) {
    return _.reduce(
      data,
      function(memo, item) {
        var key = _.pick(item, names);
        if (!has(memo, key)) {
          memo.push(key);
        }
        return memo;
      },
      []
    );
  };

  var group = function(data, names) {
    var stems = keys(data, names);
    return _.map(stems, function(stem) {
      return {
        key: stem,
        vals: _.map(_.where(data, stem), function(item) {
          return _.omit(item, names);
        })
      };
    });
  };

  group.register = function(name, converter) {
    return (group[name] = function(data, names) {
      return _.map(group(data, names), converter);
    });
  };

  group.groupByType = function(data) {
    return _.map(group(data, "type"), function(item) {
      return _.extend({}, item.key, {
        amount: _calcuateTotalAmount(item.vals),
        items: item.vals
      });
    });
  };

  group.groupByMonth = function(data) {
    const dataWithMonths = data.map(elm => ({
      ...elm,
      month: moment(elm.date).format("YYYY-MM")
    }));
    return _.map(group(dataWithMonths, "month"), function(item) {
      return _.extend({}, item.key, {
        amount: _calcuateTotalAmount(item.vals),
        items: item.vals,
        types: group.groupByType(item.vals)
      });
    });
  };

  return group;
})();

DataGrouper.register("totalAmount", function(item) {
  return _.extend({}, item.key, {
    amount: _.reduce(
      item.vals,
      function(memo, node) {
        return memo + Number(node.amount);
      },
      0
    ),
    items: item.vals
  });
});

DataGrouper.register("count", function(item) {
  return _.extend({}, item.key, { Count: item.vals.length });
});

export default DataGrouper;
