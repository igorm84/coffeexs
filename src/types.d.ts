import { Request, Response, NextFunction } from "express";

export {};
declare global {
  /**
   * Alias interface for express.Request
   * @interface Req
   * @extends {import("express").Request}
   */
  interface Req extends Request {}

  /**
   * Alias interface for express.Response
   * @interface Res
   * @extends {import("express").Response}
   */
  interface Res extends Response {}

  /**
   * Alias interface for express.NextFunction
   * @interface Next
   * @extends {import("express").NextFunction}
   */
  interface Next extends NextFunction {}
}
