document.getElementById('carttoptime').innerHTML=new Date();
logged_in_user= JSON.parse(localStorage.getItem('logged_in_user'));
document.getElementById('cartheading1').innerHTML = "Dear, "+logged_in_user+"! Here's the summary of your bill ...";
items=JSON.parse(localStorage.getItem('items'));
document.getElementById('noOfItems').innerHTML=items.length+" Items.";
aLine='';
total_cost=0;
for(i=0;i<items.length;i++){
    data_one = items[i];
    nextline = "Item "+data_one.itemName+" costing Rs. "+data_one.itemCost+" will be delivered in "+data_one.daysToDeliver;
    aLine += "<li>" + nextline + "</li>";
    total_cost+=data_one.itemCost
}
document.getElementById("vartext").innerHTML = aLine;
document.getElementById('totalamount').innerHTML = "Rs. "+total_cost;
