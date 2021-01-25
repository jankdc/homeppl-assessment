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
