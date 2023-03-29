const express = require("express");
const dotenv = require("dotenv");
const router = require("./src/router/router");
const connect = require("./src/database/connect");
const cors = require("cors");
const getUser = require("./src/controller/getUser");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(fileUpload());

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);

dotenv.config();
const PORT = process.env.SERVER_PORT || 4000;

// Database connection
connect();

// Routes
app.use("/api", router);
app.use("/api", getUser);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`Server running PORT:${PORT}`));
