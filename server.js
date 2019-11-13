const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.listen(3000, () => {
  console.log("This server running on port 3000");
});
