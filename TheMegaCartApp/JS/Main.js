document.getElementById('toptime').innerHTML=new Date();
logged_in_user= JSON.parse(localStorage.getItem('logged_in_user'));
document.getElementById('heading1').innerHTML = "Dear, "+logged_in_user+"! Welcome to Mega Cart ...";
clothing = document.getElementById('clothing');
beauty = document.getElementById('beauty');
footwear = document.getElementById('footwear');
school = document.getElementById('school');
clothing.addEventListener('click',function(){
    Clothing = {
        itemName :"dress",
        itemImage : 'Shiry',
        itemCost :  2000,
        daysToDeliver : '4-5 Days!'
    };
    items = JSON.parse(localStorage.getItem('items'));
    items.push(Clothing);
    localStorage.setItem('items',JSON.stringify(items));
    alert("1 Clothing Item added!!!");
});
beauty.addEventListener('click',function(){
    Beauty = {
        itemName :"Face Wash",
        itemImage : 'Shiry',
        itemCost :  200,
        daysToDeliver : '2-3 Days!'
    };
    items = JSON.parse(localStorage.getItem('items'));
    items.push(Beauty);
    localStorage.setItem('items',JSON.stringify(items));
    alert("1 Beauty Item added!!!");
});
school.addEventListener('click',function(){
    School = {
        itemName :"School Bag",
        itemImage : 'Shiry',
        itemCost :  1000,
        daysToDeliver : '2-3 Days!'
    };
    items = JSON.parse(localStorage.getItem('items'));
    items.push(School);
    localStorage.setItem('items',JSON.stringify(items));
    alert("1 School Item added!!!");
});
footwear.addEventListener('click',function(){
    Footwear = {
        itemName :"Sports Shoe",
        itemImage : 'Shiry',
        itemCost :  3500,
        daysToDeliver : '7-8 Days!'
    };
    items = JSON.parse(localStorage.getItem('items'));
    items.push(Footwear);
    localStorage.setItem('items',JSON.stringify(items));
    alert("1 Footwear Item added!!!");
});

