const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
};

async function index(req, res) {
    const flights = await Flight.find({});
    res.render('flights/index',{title:'All Flights', flights})
}

function newFlight(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
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
      // Always redirect after CUDing data
      // We'll refactor to redirect to the movies index after we implement it
      res.redirect('/flights');  // Update this line
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('flights/new', { errorMsg: err.message });
    }
  }