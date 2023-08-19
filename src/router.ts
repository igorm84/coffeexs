import fs from "fs";
import path from "path";
import express from "express";
import { slugSorting } from "@/utils/router";

interface RouteFile extends Record<string, express.RequestHandler> {}
const allowedMethods = new Set(["GET", "POST", "PUT", "DELETE"]);

/*
 * This setup will register all routes in the routes folder
 */
const setupRouter = async (app: express.Express) => {
  const basePath = path.join(__dirname, "routes");

  const registeredRoutes: { name: string; handler: express.RequestHandler }[] =
    [];

  const registerRoutes = async (dir: string, baseRoute: string = "/") => {
    const files = (await fs.promises.readdir(dir)).sort(slugSorting);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isDirectory()) {
        await registerRoutes(filePath, path.join(baseRoute, file));
      } else if (file.toLowerCase() === "route.ts") {
        const routeName = baseRoute.replace(/\[(\w+)\]/g, ":$1");
        const routeFile: RouteFile = await import(filePath);

        console.log(`Registering route ${routeName}`);

        for (const key of Object.keys(routeFile)) {
          if (allowedMethods.has(key)) {
            const appKey = key.toLowerCase() as keyof typeof app;
            registeredRoutes.push({
              name: routeName,
              handler: routeFile[key],
            });
            app[appKey](routeName, routeFile[key]);
          }
        }
      }
    }
  };

  await registerRoutes(basePath);

  /*
   * 404 - not found route
   */
  app.use((req, res) => {
    res.status(404).json({
      message: "not found",
    });
  });
};

export default setupRouter;
