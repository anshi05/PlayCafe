const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
require("dotenv").config();
const mongoose = require("mongoose");

app.use(cors({}));

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

app.post("/api", require("./routes/api"));

app.listen(port, () => console.log(`Server is running on port ${port}!`));
