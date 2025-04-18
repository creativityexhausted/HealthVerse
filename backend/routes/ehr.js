const router = require("express").Router();
const EHR = require("../models/EHR");

router.post("/", async (req, res) => {
  const ehr = new EHR(req.body);
  await ehr.save();
  res.json(ehr);
});

router.get("/:patientId", async (req, res) => {
  const data = await EHR.find({ patientId: req.params.patientId });
  res.json(data);
});

module.exports = router;