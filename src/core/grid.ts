export interface Column {
  width: number;
  content?: string;
}

export interface Grid {
  columns: Column[];
}

export const MAX_WIDTH = 12;

const checkColumn = (column: Column) => {
  if (column.width < 1) {
    throw new Error("Column must be at least 1 wide");
  }

  if (column.width > MAX_WIDTH) {
    throw new Error(`Column cannot be more than ${MAX_WIDTH} wide`);
  }
};

export const createGrid = (columns: Column[]): Grid => {
  if (columns.length === 0) {
    throw new Error("Grid must have at least 1 column");
  }

  columns.forEach(checkColumn);

  const totalWidths = columns.reduce((acc, column) => acc + column.width, 0);
  if (totalWidths !== MAX_WIDTH) {
    throw new Error(`Column widths must add up to ${MAX_WIDTH}`);
  }

  return { columns };
};

export const addColumn = ({ columns, ...rest }: Grid, input: Column): Grid => {
  checkColumn(input);

  const remainingWidth = MAX_WIDTH - input.width;
  if (remainingWidth <= 0) {
    throw new Error("Cannot provide space for new column");
  }

  const existingColumns = columns.map((column) => ({
    ...column,
    width: remainingWidth / columns.length,
  }));

  return {
    ...rest,
    columns: [...existingColumns, input],
  };
};

export const popColumn = ({ columns, ...rest }: Grid): Grid => {
  if (columns.length === 1) {
    throw new Error("Grid must have at least 1 column");
  }

  const remainingColumns = columns.slice(0, columns.length - 1);

  return {
    ...rest,
    columns: remainingColumns.map((column) => ({
      ...column,
      width: MAX_WIDTH / remainingColumns.length,
    })),
  };
};
