function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 5000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 10000);
    })
}
// function getTotal(){
// bookFlight()
//     .then(function (flightData) { return bookHotel(flightData) })
//     .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
// }
async function getTotal(){
    var flightData = await bookFlight();
    var cumulativeData = await bookHotel(flightData);
    console.log("total Price is " + cumulativeData);
}
getTotal()