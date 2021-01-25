import * as React from "react";
import { render } from "@testing-library/react";
import { expect } from "chai";

import { createGrid } from "../core/grid";
import { Grid } from "./grid";

describe("Grid", () => {
  it("renders a valid grid", () => {
    const data = createGrid([
      { width: 6, content: "some-content" },
      { width: 6, content: "other-content" },
    ]);

    const { getByText } = render(<Grid data={data} />);

    const columnA = getByText("some-content");
    const columnB = getByText("other-content");

    expect(columnA.className).to.equal("column width-6");
    expect(columnB.className).to.equal("column width-6");

    expect(columnA.parentElement?.className).to.equal("grid");
    expect(columnB.parentElement?.className).to.equal("grid");
  });
});
