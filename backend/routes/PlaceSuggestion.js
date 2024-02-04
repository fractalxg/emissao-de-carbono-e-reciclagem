const express = require("express");
const axios = require("axios");
const router = express.Router();

router.use(express.json());

router.post("/placesuggestion", async (req, res) => {
  try {
    const data = req.body;
    const params = {
      input: data.input,
      types: "geocode",
      key: process.env.GC_API_KEY,
    };
    const response = await axios.post(
      process.env.GC_PLACESUGGESTION_URL,
      null,
      {
        params,
      }
    );

    const responseData = response.data;

    res.send(
      responseData.predictions.map((data) => {
        return {
          description: data.description,
        };
      })
    );
  } catch (error) {
    console.error("Error fetching data from Google Cloud API.", error);
    res.status(500).send("Error fetching data from Google Cloud API.", error);
  }
});

module.exports = router;
