import express from "express";
import { RouterProvider } from "../types";
import { Route } from "../route";
import logger from "@/utils/logger";

export class ExpressRouterProvider implements RouterProvider {
  app: express.Express;
  constructor(app: express.Express) {
    this.app = app;
  }

  async registerRoute(route: Route) {
    logger.info(`Registering route ${route.name}`);

    const acessor = route.method.toLowerCase() as keyof typeof this.app;
    this.app[acessor](route.name, route.handler);
  }

  async registerRoutes(routes: Route[]) {
    logger.info(`Registering ${routes.length} routes`);
    for (const route of routes) {
      this.registerRoute(route);
    }
  }
}
