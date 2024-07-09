# Node JS:

## 1. Info:

- It is a **runtime environment**
- Does not have the DOM and Web API access as it is not browser
- Have `require` function to import dependencies
  e.g.
  ```
      const fs = require("fs");
      const http = require("http");
  ```
- additional features like **file handeling** etc.
- It has 2 types of calls,
  - **Blocking (synchronous)**
  - **Non-blocking (asynchronous)**

## 2. URL (uniform resource locator):

- `const url = require("url");`
- `http://localhost:2024/about?myName=Unknown&id=1234` here

  - `http` - is protocol
  - `//localhost:2024/about?myName=Unknown&id=1234` - is domain (user friendly name)
  - `?myName=Unknown&id=1234` - is query parameter
  - To get each data, do:

    ```
        const myUrl = url.parse(req.url, true);

        // true for parsing the **query parameter** data as well

    ```

    else it can be manages as plaine json object

## HTTP Methods:

- GET - fetch the existing data from DB
- POST - Mutate/ send/ set some data to DB
- PUT - Upload like image or document to DB
- PATCH - Update some data
- Delete - remove existing entries form DB

- 90 % changes are GET or POST only
