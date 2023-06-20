const express = require("express");
const app = express();
const cors = require("cors");
const DbCon = require("./config/db/DbCon");
require("dotenv").config();

// Port to run on
const port = process.env.PORT || 4000;

// Database Connection
DbCon();

// regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes

// listen on port
const server = app.listen(port, () =>
  console.log(`App is listening on ${port}`)
);
