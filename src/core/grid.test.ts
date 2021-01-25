import { expect } from "chai";

import { createGrid } from "./grid";

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
