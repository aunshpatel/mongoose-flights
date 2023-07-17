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

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['Air India', 'Etihad', 'Emirates', 'Qatar']
  },
  airport: {
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
}, {
  timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema); 
