// @flow

import React from "react";
import {
  LineChart as ReLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line
} from "recharts";

import { mapData } from "../utils";

type Props = {
  data: Array<any>,
  seriesKey?: string,
  seriesName?: string,
  nameKey?: string,
  valueKey?: string,
  dimensions?: number
};

export default class LineChart extends React.PureComponent<Props> {
  render() {
    let { data, seriesKey, seriesName, nameKey, valueKey } = this.props;

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    return (
      <div className="LineChart">
        <ReLineChart
          width={600}
          height={200}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis
            dataKey="name"
            allowDuplicatedCategory={false}
            // type="category"
          />
          <YAxis dataKey="value" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          {data.map((series, index) => {
            const mappedData = mapData(series[seriesKey], nameKey, valueKey);

            return (
              <Line
                key={index}
                connectNulls={true}
                type="monotone"
                name={series[seriesName]}
                dataKey="value"
                data={mappedData}
                stroke={COLORS[index % COLORS.length]}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
          <Legend />
        </ReLineChart>
      </div>
    );
  }
}
