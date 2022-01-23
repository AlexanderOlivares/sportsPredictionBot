require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
}

app.use("/api", router);

router.get("/nfl-week/:week", async (req, res) => {
  let { week } = req.params;
  week = week.length <= 2 ? `week_${week}` : week;
  try {
    let getPredictions = await pool.query(`SELECT * FROM nfl_${week}`);
    res.json(getPredictions.rows);
  } catch (error) {
    console.error(error.message);
    res.send(`No predictions for NFL week "${week}"`);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
