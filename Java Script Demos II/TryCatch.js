function Demo(){
    try{
        let abcde = bcade;
    }
    catch(error){
        if(error instanceof ReferenceError)
        {
            console.log("reference Error", error.message)    
        }
        console.log(error.message)
    }
}
Demo();
console.log("Final statement should be executed")