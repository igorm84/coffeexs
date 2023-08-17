/*
 * Imports & config
 */
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import setupRouter from "./router";

if (!process.env.PORT) {
  console.error("You must specify a server port");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT, 10);
const app = express();

/*
 * Core Express Setup
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

(async () => {
  console.log("Setting up routes...");
  await setupRouter(app);

  app.listen(PORT, () => {
    console.log(`API running in http://localhost:${PORT}`);
  });
})();
