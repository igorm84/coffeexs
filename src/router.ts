import express from "express";
import path from "path";
import fs from "fs";

/*
 * This setup will register all routes in the routes folder
 */
const setupRouter = async (app: express.Express) => {
  const basePath = path.join(__dirname, "routes");

  const registerRoutes = async (dir: string, baseRoute: string = "/") => {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        await registerRoutes(filePath, path.join(baseRoute, file));
      } else if (file.toLowerCase() === "route.ts") {
        const route = await import(filePath);
        console.log("Registering route segment", baseRoute);
        app.use(baseRoute, route.default);
      }
    }
  };

  await registerRoutes(basePath);

  /* not found route */
  app.use((req, res) => {
    res.status(404).json({
      message: "not found",
    });
  });
};

export default setupRouter;
