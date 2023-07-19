const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
  const flightArrival = await Flight.findById(req.params.id);
  
  flightArrival.destinations.push(req.body);
  
  try {
    await flightArrival.save();
  } catch (err) {
    console.log('Err:'+err);
  }
  res.redirect(`/flights/${flightArrival._id}`);
}