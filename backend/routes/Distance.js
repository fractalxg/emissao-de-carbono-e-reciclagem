const express = require("express");
const axios = require("axios");
const router = express.Router();

router.use(express.json());

router.post("/distance", async (req, res) => {
  try {
    const { origin, destination } = req.body;
    const params = {
      origins: origin,
      destinations: destination,
      units: "metric",
      key: process.env.GC_API_KEY,
    };
    const response = await axios.post(process.env.GC_DISTANCE_URL, null, {
      params,
    });

    const responseData = response.data;

    const distanceInformations = {
      distance: responseData.rows[0].elements[0].distance.text,
      duration: responseData.rows[0].elements[0].duration.text,
    };

    res.send(distanceInformations);
  } catch (error) {
    console.error("Error fetching data from Google Cloud API.", error);
    res.status(500).send("Error fetching data from Google Cloud API.", error);
  }
});

module.exports = router;
