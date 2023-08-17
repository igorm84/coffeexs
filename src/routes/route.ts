import HelloController from "@/controllers/hello/HelloController";
import express from "express";
const router = express.Router();

/*
 * Hello world
 */
router.get("/", HelloController.hello);

export default router;
