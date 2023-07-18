const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index',{title:'All Flights', flights})
}

async function show(req, res) {
  const flights = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Details', flights });
}

function newFlight(req, res) {
    res.render('flights/new', { title: 'Add New Flight', errorMsg: '' });
}


async function create(req, res) {
  //airline, airport, flightNo, departs
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