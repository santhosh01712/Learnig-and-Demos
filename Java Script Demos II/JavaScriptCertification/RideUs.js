class UserRide {
    constructor(username, currentpoints, lastride_fromPoint, lastride_toPoint) {
        this.username = username;
        this.currentpoints = currentpoints;
        this.lastride_fromPoint = lastride_fromPoint;
        this.lastride_toPoint = lastride_toPoint;
    }
};
var userTravelDetails = [
    new UserRide('Abhi', 600, 'Yelahanka', 'ECity'),
    new UserRide('Bhargava', 1600, 'ECity', 'Yelahanka'),
    new UserRide('Charlie', 500, 'R T Nagar', 'ECity'),
    new UserRide('David', 1500, 'ECity', 'R T Nagar'),
    new UserRide('Esha', 500, 'Silk Board', 'ECity')
];
let rideSuccess = 0;
let rideNotMatch = 0;
let minPoint = 0;
function applyOffer(offers) {
    for (let i = 0; i < offers.length; i++) {
        let currentRide = offers[i];
        let fromLocation = currentRide.fromLocation;
        let toLocation = currentRide.toLocation;
        let points = currentRide.points;
        if (points <= 100) {
            minPoint += 1;
        } else {
            let ride_found = false;
            for (let j = 0; j < userTravelDetails.length; j++) {
                if (userTravelDetails[j].lastride_fromPoint === fromLocation && userTravelDetails[j].lastride_toPoint === toLocation) {
                    userTravelDetails[j].currentpoints += points;
                    ride_found = true;
                }
            }
            if (ride_found) {
                rideSuccess += 1;
            }
            else {
                rideNotMatch += 1;
            }
        }

    }
    console.log("Ride Successful: " + rideSuccess);
    console.log("Ride Locations do not match with any user: " + rideNotMatch);
    console.log("Ride points is minimal: " + minPoint)
}
var rideObj = [{ fromLocation: 'Yelahanka', toLocation: 'ECity', points: 250 },
    { fromLocation: 'Yelahanka', toLocation: 'ECity', points: 250 },
    { fromLocation: 'R T Nagar', toLocation: 'Yelahanka', points: 0 }];

//console.log(userTravelDetails);
//applyOffer(rideObj)
//console.log(userTravelDetails);



var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + 
        d.toString().trim() + "]");
  });


