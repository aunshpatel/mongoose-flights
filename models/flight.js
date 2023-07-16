const flights = [
    {id: 1, todo: 'Air India', route:'Ahmedabad to Newark via Abu Dhabi'},
    {id: 2, todo: 'Etihad', route:'Mumbai to Newark via Abu Dhabi'},
    {id: 3, todo: 'Emirates',  route:'Ahmedabad to Newark via Dubai'}
  ];
	
  module.exports = {
    getAllFlights
  };
	
  function getAllFlights() {
    return flights;
  }