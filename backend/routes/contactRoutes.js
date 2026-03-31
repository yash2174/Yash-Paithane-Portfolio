const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

export const API_URL = "https://yash-paithane-portfolio.onrender.com/api/contact"
// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Basic sanitization
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Simple XSS prevention
    const sanitize = (str) => String(str).replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();

    const contact = new Contact({
      name: sanitize(name),
      email: sanitize(email),
      message: sanitize(message)
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Message received! I will get back to you soon.',
      data: { id: contact._id }
    });

  } catch (err) {
    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map(e => e.message);
      return res.status(400).json({ success: false, message: errors[0] });
    }
    console.error('Contact error:', err);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
});

// GET /api/contact (admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
