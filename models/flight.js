const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  arrivalAirport: {
    type: String,
    enum: ['EWR', 'AMD', 'IAD', 'BOM', 'IGI']
  },
  arrivalDate: Date,
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
  destinations: [destinationSchema],
  ticket:[{
    type: Schema.Types.ObjectId,
    ref:'Ticket'
  }]
}, {
  timestamps: true,
});

module.exports = mongoose.model('Flight', flightSchema);
