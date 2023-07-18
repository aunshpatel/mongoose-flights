const Flight = require('../models/flight');

module.exports = {
  create
};

async function create(req, res) {
  console.log(req.params.id);
  const flight = await Flight.findById(req.params.id);
  console.log(flight);
  flight.arrivalDetails.push(req.body);
  try {
    // Save any changes made to the movie doc
    await flight.save();
  } catch (err) {
    console.log(err);
  }
  // Step 5:  Respond to the Request (redirect if data has been changed)
  res.redirect(`/flights/${flights._id}`);
}