import { Request, Response } from "express";
import { BaseController } from "@/controllers";

class HelloController extends BaseController {
  public async hello(req: Request, res: Response) {
    return res.status(200).json({
      message: "Hello World!",
    });
  }
}

export default new HelloController();
