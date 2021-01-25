export interface Column {
  width: number;
  content?: string;
}

export interface Grid {
  columns: Column[];
}

export const createGrid = (columns: Column[]): Grid => {
  return { columns: [] };
}
