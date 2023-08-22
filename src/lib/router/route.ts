export class Route {
  name: string;
  method: string;
  handler: unknown;

  static allowedMethods = new Set(["GET", "POST", "PUT", "DELETE"]);

  constructor({ name, handler, method }: Route) {
    this.name = name;
    this.handler = handler;
    this.method = method;
  }
}
