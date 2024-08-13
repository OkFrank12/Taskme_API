// Importing necessary modules.
import express from "express";
import { envConfig } from "./config/envConfig.js";
import { dbConfig } from "./config/dbConfig.js";
import { appConfig } from "./appConfig.js";

// Using the port number
const port = parseInt(envConfig.PORT);

// Creating our server
const app = express();

// Creating the app
appConfig(app);

const server = app.listen(process.env.PORT || port, () => {
  // Configuring the database
  dbConfig();
});

// Handling errors
process.on("uncaughtException", (error) => {
  console.error("uncaught-exception: ", error.message);
});

process.on("unhandledRejection", (reason) => {
  console.error("unhandled-rejection", reason.message);
  server.close(() => {
    process.exit(1);
  });
});
