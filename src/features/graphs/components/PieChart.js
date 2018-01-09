// @flow

import React from "react";
import { PieChart as RePieChart, Pie, Cell, Legend, Tooltip } from "recharts";

import { mapData } from "../utils";

type Props = {
  data: Array<any>,
  nameKey?: string,
  valueKey?: string,
  dimensions?: number
};

export default class PieChart extends React.PureComponent<Props> {
  render() {
    let { data, nameKey, valueKey, dimensions } = this.props;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
      <div className="PieChart">
        <RePieChart width={dimensions || 250} height={dimensions || 250}>
          <Pie
            data={mapData(data, nameKey, valueKey, true)}
            dataKey="value"
            innerRadius={40}
            outerRadius={80}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </RePieChart>
      </div>
    );
  }
}
