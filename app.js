import express from "express";

import {
  deleteAstronautById,
  updateAstronautById,
  getAstronautsByName,
  replaceAstronautById,
  getAstronauts,
  createAstronaut,
  getAstronautById,
} from "./models/astronauts.js";

const app = express();

app.use(express.json());

/* 

All json responses for this tasks should follow the pattern:

res.json({
  "success": boolean,
  "payload": returnedData
})

*/

// Task 1

/* Write a request handler to return the correct response when a `GET` request is received to `/astronauts`. Choose the appropriate 
function from the imported functions at the top of the `app.js` to get your data. */
app.get("/astronauts", async (req, res) => {
  const allAstronauts = await getAstronauts();
  try {
    res.status(200).json({
      "success": true,
      "payload": allAstronauts
    });
  } catch {
    res.status(500).json({
      "success": false,
      "payload": null
    });
  };
});

// Task 2

/* Write a request handler to return the correct response and perform the correct action when a `POST` request is received to 
`/astronauts`. Choose the appropriate function from the imported functions at the top of the `app.js` to perform the action. */
app.post("/astronauts", async (req, res) => {
  const newAstronaut = await req.body;
  try {
    createAstronaut(newAstronaut);
    res.status(201).json({
      "success": true,
      "payload": newAstronaut
    });
  } catch {
    res.status(300).json({
      "success": false,
      "payload": null
    });
  };
});

// Task 3

/* Write the request handler to return the data from the function getAstronautById. Have this handler listen to requests at the 
appropriate path. */
app.get("/astronauts/:id", async (req, res) => {
  const id = req.params.id;
  const astronaut = await getAstronautById(id);
  res.json({
    "success": true,
    "payload": astronaut
  });
});

// Task 4

/* Write the request handler to perform the action and return the data from the function replaceAstronautById. Have this handler 
listen to requests at the appropriate path. */
app.put("/astronauts/:id", async (req, res) => {
  const id = req.params.id;
  const newAstronaut = req.body;
  const replacedAstronaut = await replaceAstronautById(id, newAstronaut);
  res.json({
    "success": true,
    "payload": replacedAstronaut
  });
});

// Task 5

/* Write the request handler to perform the action and return the data from the function deleteAstronautById. Have this handler 
listen to requests at the appropriate path. */

// Task 6

/* Write the request handler to perform the action and return the data from the function updateAstronautById. Have this handler 
listen to requests at the appropriate path. */

export default app;
