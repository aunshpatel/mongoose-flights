const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create,
    addToFlight,
};

async function newTicket(req, res) {
  //Sort performers by their name
  //const tickets = await Ticket.find({}).sort('name');
  const tickets = await Ticket.find({}).sort('name');
  res.render('tickets/new', { title: 'Add New Ticket', tickets });
}

async function create(req, res) {
  req.body.seat = req.body.seat;
  req.body.price = req.body.price;
  try {
    await Ticket.create(req.body);
  } catch (err) {
    console.log("Error - tickets: "+err);
  }
  res.redirect('/tickets/new');
}

async function addToFlight(req, res) {
  const flight = await Flight.findById(req.params.id);
  flight.ticket.push(req.body.ticketID);
  console.log('addToFlight:'+flight)
  await flight.save();
  res.redirect(`/flights/${flight._id}`);
}