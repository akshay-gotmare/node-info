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

## Express Js with Node:

```
    npm i express
```

- With express, the need for `URL` and `HTTP` is diminished.
- Express makes it much easier to write the routes (`/about`, etc) easier with readable code format.

- **_Boilerplate_**

```
    const express = require("express");

    const app = express();

    app.get("/",(req, res)=> res.send("Home Page"));
    app.post("/login",(req, res)=>{ ... })


    app.listen(8000, ()=> console.log("Server Staterd..."))
```

## REST-ful API:

REST API's have some rules to be followed which make them different from regular API's

- **_Rule 1_**

  - Always keep in mind the `client server architecture` i.e. it is necessary to keep in mind that the server and client are 2 different entities.
  - While sending the response to the client, we need to keep in mind what kind of data is needed for that particular client.
  - For example, if the client is a `browser` it is a ok to send the `html` as response (using `Server Side Rendering` aka `SSR`). we cannot send the HTML respose to a client like Alexa which has no browser.

- **_Rule 2_**

  - Always **respect** all the `HTML Methods`.
  - Namely, `GET`, `POST`, `PATCH`, `PUT`, `UPDATE`, `DELETE`.
  - Each should be used according to their purpose.
  - E.g. it's not a good practice to `Update` with `Post` method.

- **_Rule 3_**
  - Naming of the routes should not be done as `getLoginData` when we already are passing `app.GET` that itself defines its purpose.
