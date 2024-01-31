const express = require("express");
const axios = require("axios");
const router = express.Router();

router.use(express.json());

router.post("/coordinates", async (req, res) => {
    try {
      const data = req.body;
      const params = {
        address: data.address,
        key: process.env.GC_API_KEY,
      };
      const response = await axios.post(process.env.GC_COORDINATES_URL, null, {
        params,
      });
  
      const responseData = response.data;
  
      const locationInformation = {
        lat: responseData.results[0].geometry.location.lat,
        lng: responseData.results[0].geometry.location.lng,
      };
  
      res.send(locationInformation);
    } catch (error) {
      console.error("Error fetching data from Google Cloud API.", error);
      res.status(500).send("Error fetching data from Google Cloud API.", error);
    }
  });

module.exports = router;