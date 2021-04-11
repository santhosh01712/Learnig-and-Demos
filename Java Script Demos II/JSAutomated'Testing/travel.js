
function totalFare(baseFare,taxPercentage){
    let finalPrice;
    finalPrice = baseFare * (1+taxPercentage/100);
    return finalPrice;
}