const express = require('express');
const router = express.Router();

// Example route for GET /api/appointments
router.get('/', (req, res) => {
  res.json({ message: 'Appointments route working!' });
});

module.exports = router;
