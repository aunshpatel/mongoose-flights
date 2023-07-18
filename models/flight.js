// const flights = [
//   {flightNo: 1, airline: 'Air India', airport:"Ahmedabad", departs: new Date()},
//   {flightNo: 2, airline: 'Etihad', airport:"Ahmedabad", departs: new Date()},
//   {flightNo: 3, airline: 'Emirates', airport:"Ahmedabad", departs: new Date()}
// ];

// module.exports = {
//   getAllFlights
// };

// function getAllFlights() {
//   return flights;
// }

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  arrivalAirport: {
    type: String,
    enum: ['EWR', 'AMD', 'IAD', 'BOM', 'IGI']
  },
  arrival: Date,
}, {
  timestamps: true,
});


const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Air India', 'Etihad', 'Emirates', 'Qatar']
  },
  departureAirport: {
    type: String,
    enum: ['EWR', 'AMD', 'IAD', 'BOM', 'IGI']
  },
  flightNo: {
    type: Number,
    min: 10,
    max:9999,
    required: true
  },
  departs: Date,
  destinations: [destinationSchema]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);
