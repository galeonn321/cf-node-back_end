require("./database");
require('dotenv').config()
const express = require('express');
const cors = require('cors');
const auth = require("./routes/auth");
const movies = require("./routes/movies");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/movies", movies);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
