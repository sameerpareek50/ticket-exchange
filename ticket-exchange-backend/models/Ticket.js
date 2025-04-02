const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    ticket_id: String,
    departure: String,
    destination: String,
    date: String,
    price: Number
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
