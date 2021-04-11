function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            setTimeout(resolve(5600), 2000);
        } else {
            reject(Error("Flight can not be booked"))
        }
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
bookFlight("AirIndia") // calling the function Book fight
    .then(function (flightData) { // resolving it and getting the resolve data as flightdata
        return bookHotel(flightData) }) // using the resoleved data to call the bookhotel
    .then(function (cumulativeData) {  // resolving bookhotel and getting the data as cumulative data
        console.log(" Total is " + cumulativeData) }) // prints the cumulative data is promise is returened 
    .catch(e => console.log(e.message)) // handles the reject of bookhotel