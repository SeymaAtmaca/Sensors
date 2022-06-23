const express = require("express");
const {addMap} = require("./controllers/map"); 
const router = express.Router();
const {addSensor, allSensors, deleteSensor} = require("./controllers/sensor");
router.post("/sensors/new", addSensor);
router.post("/map/newMap", addMap); 
router.get("/sensors", allSensors);
router.get("/sensors/logs",allSensors ); //....
router.delete("/sensors/delete/:id", deleteSensor);

module.exports = router;


