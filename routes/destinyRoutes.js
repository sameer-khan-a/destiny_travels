import {
    showAllDestinations,
    showDestinationById,
    createDestination,
    updateDestination,
    deleteDestination
} from "../controllers/destinyControllers.js";
import express from "express";

const router = express.Router();

router.get("/destinations", showAllDestinations);
router.get("/destinations/:id", showDestinationById);
router.post("/destinations", createDestination);
// Two Missing routes

export default router;


