import { Route } from "./route";

export interface RouterAdapter {
  getRoutes(): Promise<Route[]>;
}

export interface RouterProvider {
  registerRoute(route: Route): Promise<void>;
  registerRoutes(routes: Route[]): Promise<void>;
}
