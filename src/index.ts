if (!process.env.PORT) {
  logger.error("No PORT specified in .env file");
  process.exit(1);
}

/*
 * Imports & config
 */
import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import logger from "@/utils/logger";
import config from "@/lib/config";

import RouterManager from "@/lib/router";
import { FileRouterAdapter } from "@/lib/router/adapters/router-file-adapter";
import { ExpressRouterProvider } from "@/lib/router/providers/router-express-provider";

const PORT: number = parseInt(process.env.PORT, 10);
const app = express();

/*
 * Core Express Setup
 */
app.use(helmet());
app.use(cors());
app.use(express.json());

(async () => {
  logger.log("Setting up routes...");

  await new RouterManager(
    new FileRouterAdapter(config.routesPath),
    new ExpressRouterProvider(app),
  ).setup();

  app.listen(PORT, () => {
    logger.log(`API running in http://localhost:${PORT}`);
  });
})();
