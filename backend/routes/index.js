const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const ownerRoutes = require("./ownerRoutes");
const playerRoutes = require("./playerRoutes");
const commonRoutes = require("./commonRoutes");
const adminRoutes = require("./adminRoutes"); 
const arenaRoutes = require("./arenaRoutes");
const sportRoutes = require("./sportRoutes"); 
const courtRoutes = require("./courtRoutes");


router.use("/auth", authRoutes); // Authentication routes (login, register, etc.)
router.use("/owner", ownerRoutes); // Owner routes
router.use("/player", playerRoutes); // Player routes
router.use("/common", commonRoutes); // Common routes for all users
router.use("/admin", adminRoutes); // Admin routes
router.use("/arena", arenaRoutes); // Arena routes
router.use("/sport", sportRoutes); // Sport routes
router.use("/courts", courtRoutes); // Sport routes


module.exports = router;
