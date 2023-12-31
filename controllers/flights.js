const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index',{title:'All Flights', flights})
}

async function show(req, res) {
  const flights = await Flight.findById(req.params.id).populate('ticket');

  const ticket = await Ticket.find({_id:{$nin:flights.ticket}}).sort('seat');

  res.render('flights/show', { title: 'Flight Details', flights, ticket });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add New Flight', errorMsg: '' });
}


async function create(req, res) {
  req.body.airline = req.body.airline;

  req.body.airport = req.body.airport;

  req.body.flightNo = req.body.flightNo;

  req.body.departs = req.body.departs;
  try {
    await Flight.create(req.body);
    res.redirect('/flights');
  } catch (err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}