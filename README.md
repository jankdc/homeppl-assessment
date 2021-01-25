# Homeppl Assessment

## Usage

```
npm install
npm start
```

## Testing

In order to run the test, please make sure you have Chrome installed in your system.

```
npm install
npm test
```

## Usage

```ts
import { createGrid } from "homeppl";

const grid = createGrid([{ width: 12, content: "some-content" }]);
```

## Q&A

### How do you export the grid as JSON?

Any of the exported functions in `src/core/grid.ts` generates a grid that is JSON-compatible

### How would an import function works?

The imported JSON can be directly passed in as React props. For HTML, it would make sense to convert the HTML into a DOM object in order to navigate the DOM nodes and imitate the structure of the JSON or the Grid object.

### How would we be able to add a new type of column, like a ​menuColumn​, while still having it behave the same as a column?

We could introduce an enum type called `type` in the column object. As discussed, we would have 2 enum values, `DEFAULT` and `MENU` to distinguish them.

### How would we be able to support multiple types of content inside a column, besides text? Such as images, video’s, etc.

We could replace the content type from a string to an object that represents a recursive tree structure, similar to a DOM tree, which will store what content to render and where to render it. Here's an example:

```ts
enum ContentType {
  TEXT,
  IMAGE,
  VIDEO
}

interface Content {
  type: ContentType;
  attributes: {
    [index: string]: unknown
  };
}

type ContentNode = { children: ContentNode } 
  | (Content | ContentNode)[] 
  | Content;

interface Column {
  width: number;
  content?: ContentNode;
}
```

The renderer would then navigate the tree and would be able to render the correct component based on the content type stored in each node.

### If the grid size (12) is not fixed but instead is different for each grid created, what would need to change to support that?

Instead of hard-coding `MAX_SIZE` we could add it in as part of the instantiation of the grid and store it in the grid object. Everything would be relative to that value instead.

### How can we ensure that columns added do not appear smaller on one grid (12 width) from the other grid (24 width) when we add them?

Instead of specifying an absolute value of how wide you want to take space in the new grid, we can introduce a new function that takes in an input column that specifies how much it wants to occupy space in the grid percentage-wise.
