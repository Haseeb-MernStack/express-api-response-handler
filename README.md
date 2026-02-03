# express-api-response-handler

Lightweight helpers to standardize JSON API responses in Express apps.

**Purpose:** Provide two simple response helpers — `successResponse` and `errorResponse` — to enforce a consistent response shape across routes.

**Features:**

- Consistent success and error response shapes
- Simple API: call the helper with `res`, message, data/errors, and optional status code
- Small, framework-agnostic helpers that work with Express

## Response shapes

- Success:

  ```json
  {
    "success": true,
    "message": "...",
    "data": {
      /* payload or null */
    },
    "errors": null
  }
  ```

- Error:

  ```json
  {
    "success": false,
    "message": "...",
    "data": null,
    "errors": [
      /* array of error details */
    ]
  }
  ```

## Installation

Install dependencies and run the example:

```bash
npm install
node example/app.js
```

## Usage

Import the helpers and call them from your route handlers:

```javascript
import express from "express";
import { successResponse, errorResponse } from "./src/index.js";

const app = express();

app.get("/success", (req, res) => {
  successResponse(res, "Data fetched", { name: "Haseeb" });
});

app.get("/error", (req, res) => {
  errorResponse(res, "Unauthorized access", [], 401);
});

app.listen(3000);
```

## Files

- `src/response/successResponse.js` — `successResponse(res, message, data, statusCode)`
- `src/response/errorResponse.js` — `errorResponse(res, message, errors, statusCode)`
- `src/index.js` — exports the helpers via `src/response/apiResponse.js`

## Notes

- Example uses ES module `import` syntax. If you run into module errors, either set `type` to `module` in `package.json` or adjust imports to CommonJS `require`.

---

If you'd like, I can also update `package.json` to use `type: \"module\"` or add a small test script to verify the example server starts.
