const express = require("express");
const cors = require("cors");
const apiRouter = require("./routes");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

//chirp will show up as undefined without line 12
// app.use(express.urlencoded({ extended: false }));
app.use("/api", apiRouter);
app.use(express.static(path.join(__dirname, "../client")));

app.listen(3001, console.log("App is ready!"));
