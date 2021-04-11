class Product{
    constructor(prodid,prodName,prodQuantity,productPrice){
        this.prodid = prodid;
        this.prodName = prodName;
        this.prodQuantity = prodQuantity;
        this.productPrice = productPrice;
    }   
}
let prod505 = new Product(505,'Honor 9i',0,18000);
let prod506 = new Product(506,'Mi A1',5,15000);
let prod507 = new Product(507,'Lenovo K6',0,9920);
let prod508 = new Product(508,'Norse Mytholgy',12,300);
let prod509 = new Product(509,'Origin',6,409);
let ProductArray = [prod505,prod506,prod507,prod508,prod509];
console.log(ProductArray)
for(let i in ProductArray){
    tr=document.createElement('tr');
    product = ProductArray[i];
    for(let key in product){
        td = document.createElement('td');
        td.innerHTML = product[key];
        tr.appendChild(td);
    }
    document.getElementById('tableBody').appendChild(tr);
    
}
