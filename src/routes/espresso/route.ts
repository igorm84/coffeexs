import EspressoController from "@/controllers/espresso/EspressoController";
import express from "express";

const router = express.Router();

/*
 * Espresso make
 */
router.get("/", EspressoController.make);

export default router;
