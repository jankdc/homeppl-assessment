import { expect } from "chai";

import { addColumn, createGrid, popColumn } from "./grid";

describe("createGrid", () => {
  it("returns a grid object if its valid", () => {
    const columns = [{ width: 12, content: "some-content" }];
    expect(createGrid(columns)).to.deep.equal({ columns });
  });

  it("throws if columns have a width less than 1", () => {
    expect(() => createGrid([{ width: 0 }])).throws("Column must be at least 1 wide");
  });

  it("throws if columns have a width more than 12", () => {
    expect(() => createGrid([{ width: 13 }])).throws("Column cannot be more than 12 wide");
  });

  it("throws if there are no columns", () => {
    expect(() => createGrid([])).throws("Grid must have at least 1 column");
  });

  it("throws if column widths don't add up to 12", () => {
    const columns = [
      { width: 6 },
      { width: 5 }
    ];

    expect(() => createGrid(columns)).throws("Column widths must add up to 12");
  });
});

describe("addColumn", () => {
  it("adds a new column if its valid", () => {
    const grid = createGrid([
      { width: 6, content: "content-a" },
      { width: 6, content: "content-b" },
    ]);

    const input = {
      width: 6,
      content: "content-c"
    };

    expect(addColumn(grid, input)).to.deep.equal({
      ...grid,
      columns: [
        { width: 3, content: "content-a" },
        { width: 3, content: "content-b" },
        input
      ]
    });
  });

  it("throws if the new column's width is less than 1", () => {
    const grid = createGrid([
      { width: 6, content: "content-a" },
      { width: 6, content: "content-b" },
    ]);

    const input = {
      width: 0,
      content: "content-c"
    };

    expect(() => addColumn(grid, input)).throws("Column must be at least 1 wide");
  });

  it("throws if the new column's width is more than 12", () => {
    const grid = createGrid([
      { width: 6, content: "content-a" },
      { width: 6, content: "content-b" },
    ]);

    const input = {
      width: 13,
      content: "content-c"
    };

    expect(() => addColumn(grid, input)).throws("Column cannot be more than 12 wide");
  });

  it("throws if the new grid cannot provide space for new column", () => {
    const grid = createGrid([
      { width: 6, content: "content-a" },
      { width: 6, content: "content-b" },
    ]);

    const input = {
      width: 12,
      content: "content-c"
    };

    expect(() => addColumn(grid, input)).throws("Cannot provide space for new column");
  });
});

describe("popColumn", () => {
  it("pops the last column if its valid to do so", () => {
    const grid = createGrid([
      { width: 6, content: "content-a" },
      { width: 6, content: "content-b" },
    ]);

    expect(popColumn(grid)).to.deep.equal({
      ...grid,
      columns: [{ width: 12, content: "content-a" }]
    });
  });

  it("throws if there is only 1 column left", () => {
    const grid = createGrid([
      { width: 12, content: "content-a" }
    ]);

    expect(() => popColumn(grid)).throws("Grid must have at least 1 column");
  });
});
