ex= {thi:'san',san:'SANTHOSH'};
for(a in ex){
    console.log(a);
}
var mobJson='{"productId":1001,"product":{"name":"Moto","series":"G5+","color":"NightSky"},"price":14900,"category":"Electronics","shippingDetails":{"shipmentNo":"1DEL009","company":"Intel Marketing","receivedOn":"2018-6-19"},"seller":{"name":"xyz Mobile","location":"New York","stock":17}}'
var mobobj = JSON.parse(mobJson);
console.log(mobobj);