const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket'); // Import model


// Save a new ticket
router.post('/', async (req, res) => {
    try {
        const newTicket = new Ticket({
            ticket_id: req.body.ticket_id,
            departure: req.body.departure,
            destination: req.body.destination,
            date: req.body.date,
            price: req.body.price
        });

        await newTicket.save(); // Save to MongoDB
        res.status(201).json({ message: 'Ticket saved successfully!', ticket: newTicket });
    } catch (error) {
        res.status(500).json({ message: 'Error saving ticket', error });
    }
});

module.exports = router;
