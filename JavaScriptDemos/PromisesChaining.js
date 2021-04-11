doSomething(function(result){
	doSomethingElse(result,function(newResult){
		doThirfThing(newResult,function(finalResult){
			console.log('Print the final result ' +finalResult);
		}, failureCallback);
	}, failurCallback);
}, failureCallback);
//This is changed to this after Chaining effect
doSomething().then(function (result) {
	return doSomethingElse(result);
})
	.then(function (newResult) {
		return doThirdThing(newResult);
	})
	.then(function (finalResult) {
		console.log("Print the final result " + finalResult)
	})
	.catch(failureCallBack);
