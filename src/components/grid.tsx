import * as React from "react";

import type { Column as ColumnData, Grid as GridData } from "../core/grid";

export interface GridProps {
  data: GridData;
}

export interface ColumnProps {
  data: ColumnData;
}

export const Column = ({ data }: ColumnProps) => (
  <div className={`column width-${data.width}`}>{data.content ?? ""}</div>
);

export const Grid = ({ data }: GridProps) => (
  <div className="grid">
    {data.columns.map((column, index) => (
      <Column key={`column-${index}`} data={column} />
    ))}
  </div>
);
