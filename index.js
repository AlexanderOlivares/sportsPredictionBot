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
  console.log("NODE_ENV is production");
  app.use(express.static(path.join(__dirname, "client/build/static/js/main.19e9670b.chunk.js")));
} else {
  console.log("NODE_ENV is development");
}

app.use("/api", router);

router.get("/nfl/:season/:week", async (req, res) => {
  const { season, week } = req.params;
  const seasonRequested = season.replace("-", "");
  const weekRequested = week.length <= 2 ? `week_${week}` : week;
  try {
    const getPredictions = await pool.query(
      `SELECT * FROM nfl_${seasonRequested}_${weekRequested}`
    );
    res.json(getPredictions.rows);
  } catch (error) {
    console.error(error.message);
    res.json(`Error getting predictions for NFL week "${week}"`);
  }
});

router.get("/nba-date/:year/:date", async (req, res) => {
  const { year, date } = req.params;
  try {
    const getPredictions = await pool.query(`SELECT * FROM nba_${year} WHERE game_date = ($1)`, [
      date,
    ]);
    res.json(getPredictions.rows);
  } catch (error) {
    console.error(error.message);
    res.json(`Error getting NBA predictions`);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
