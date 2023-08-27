// testing frontend pakai eact
const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.post('/check-discount', async (req, res) => {
  try {
    const { username } = req.body;

    const customer = await Customer.findOne({ where: { username } });
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    if (customer.totalSpent >= 2000000) {
      const voucherCode = generateUniqueVoucherCode();
      const expiryDate = new Date();
      expiryDate.setMonth(expiryDate.getMonth() + 3);
      return res.status(200).json({ voucherCode, expiryDate });
    }
    res.status(200).json({ message: 'No discount available' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;