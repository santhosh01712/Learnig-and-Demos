let power=666;
function man(){
    power = 10;
    console.log('man'+power);
}
function bat(spider){
    power = 30;
    try{
        spider();
    }catch(e){
        power=20
    }
    console.log("bat "+power);
}
function spider(){
    bat(man);
}
spider();

var str="The best things3 are free in life";
var pattern = new RegExp("[a-z]+[0-9]");
var result=pattern.exec(str);
console.log(result)

function test(){
    console.log(a);
    console.log(foo());
    var a=1;
}
function foo(){
    return 2;
}
test()

const myFunc = () => console.log("Hello") || "World!";
let ret = myFunc();
console.log(ret)


var num = 111;
function chage(){
    var num = 222;
    num = num + 111;
}
chage();
console.log(num);

counts = [1,2,3,4];
counts1=counts.map(_ => Math.pow(_,2));
console.log(counts1)


pan = "ABCDE1234F"
pan1="VWXYZ6789Q"
pattern = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/
console.log(pattern.test(pan))
console.log(pattern.test(pan1))