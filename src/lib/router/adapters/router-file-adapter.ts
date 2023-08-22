import fs from "fs";
import path from "path";
import { slugSorting } from "@/utils/router";

import { Route } from "../route";
import { RouterAdapter } from "../types";

const isRouteFile = (file: string) => /route\.(ts|js)$/i.test(file);

export class FileRouterAdapter implements RouterAdapter {
  private basePath: string;
  private routes: Route[] = [];

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  private async getRoutesFromDir(dir: string, baseRoute: string) {
    // sort files by slugs that will convert to params
    const files = (await fs.promises.readdir(dir)).sort(slugSorting);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const fileStat = await fs.promises.stat(filePath);

      if (fileStat.isDirectory()) {
        await this.getRoutesFromDir(filePath, path.join(baseRoute, file));
      } else if (isRouteFile(file)) {
        const routeName = baseRoute.replace(/\[(\w+)\]/g, ":$1");
        const routeImports = await import(filePath);

        for (const pkey of Object.keys(routeImports)) {
          const key = pkey.toUpperCase();
          if (Route.allowedMethods.has(key)) {
            this.routes.push(
              new Route({
                name: routeName,
                handler: routeImports[pkey],
                method: key,
              }),
            );
          }
        }
      }
    }
  }
  async getRoutes() {
    await this.getRoutesFromDir(this.basePath, "/");
    return this.routes;
  }
}
