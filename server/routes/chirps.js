const express = require("express");
const request = require("request");
const chirpsStore = require("./chirpstore");
let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.json(chirpsStore.GetChirp(id));
  } else {
    res.send(chirpsStore.GetChirps());
  }
});

router.post("/", (req, res) => {
  console.log(req.body)
  chirpsStore.CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let chirp = req.body;
  chirpsStore.UpdateChirp(id, chirp);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  chirpsStore.DeleteChirp(id);
  res.sendStatus(200);
});

module.exports = router;
