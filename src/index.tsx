import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createGrid } from "./core/grid";
import { Grid } from './components/grid';

const grid = createGrid([
  { width: 3, content: "some-content" },
  { width: 3, content: "cool-content" },
  { width: 6, content: "more-content" },
]);

ReactDOM.render(
  <React.StrictMode>
    <Grid data={grid} />
  </React.StrictMode>,
  document.getElementById('root'),
);
