require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;
const router = express.Router();

app.use(cors());
app.use(express.json());
app.use("/api", router);

router.get("/nfl-week/:week", async (req, res) => {
  const { week } = req.params;
  try {
    let getPredictions = await pool.query(`SELECT * FROM nfl_week_${week}`);
    res.json(getPredictions.rows);
  } catch (error) {
    console.error(error.message);
    res.send(`No predictions for NFL week "${week}"`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
