const express = require("express");
require("dotenv").config({ path: ".env" });
const db = require("./db/db");
const indexRouter = require("./routes/index");
const urlRouter = require("./routes/url");

const app = express();
db();

app.use(express.json({ extended: false }));

//routing
app.use("/", indexRouter);
app.use("/api/url", urlRouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
