import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
// import prisma from "@/db";

export abstract class BaseController {
  //   protected prisma: PrismaClient;

  constructor() {
    // this.prisma = prisma;
  }

  public validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
}
