//Async

async function hello() {
    //Value will be wrapped in a resolved promise and returned
    return "Hello Async";
}
hello().then(val => console.log(val)); // Hello Async
async function hello() {
    //Promise can be returned explicitly as well
    return Promise.resolve("Hello Async");
}
hello().then(val => console.log(val)); // Hello Async


//Await
function sayAfter2Seconds(x) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(x);
		}, 2000);
	});
}
async function hello() {
	//wait until the promise returns a value
	var x = await sayAfter2Seconds("Hello Async/Await");
	console.log(x); //Hello Async/Await
}
hello();


//fetch
//pass any url that you wish to access to fetch()    
let response = await fetch(url);
if (response.ok) { // if HTTP-status is 200-299
    // get the response body 
    let json = await response.json();
    console.log(json)
}
else {
    console.log("HTTP-Error: " + response.status);
}

