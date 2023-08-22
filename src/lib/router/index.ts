import { RouterAdapter, RouterProvider } from "./types";

export default class RouterManager {
  adapter: RouterAdapter;
  provider: RouterProvider;

  constructor(adapter: RouterAdapter, provider: RouterProvider) {
    this.adapter = adapter;
    this.provider = provider;
  }

  async setup() {
    await this.provider.registerRoutes(await this.adapter.getRoutes());
  }
}
