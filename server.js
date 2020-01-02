const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const colors = require('colors')
const connectDB = require("./config/db");

// Load env vars
dotenv.config({ path: "./config/config.env" });

// Connect to database
connectDB();

const app = express();
app.use(express.json())

//Route Files
const bootcamps = require("./routes/bootcamps");
//dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(logger);
  app.use(morgan("dev"));
}
//Mount Routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log("listening on".bgWhite.black, PORT.cyan, process.env.NODE_ENV.yellow)
);

//handle unhandled rejections for promises
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  //close server
  server.close(() => process.exit(1));
});
