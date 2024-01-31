const express = require("express");
const cors = require("cors");
const server = express();
require("dotenv").config();

server.use(
  cors({
    origin: process.env.LOCAL_HOST,
    methods: ["GET", "POST"],
  })
);

const distanceRoute = require("./routes/Distance");
server.use("/", distanceRoute);

const coordinates = require("./routes/Coordinates");
server.use("/", coordinates);

const placesuggestion = require("./routes/PlaceSuggestion");
server.use("/", placesuggestion);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
  });