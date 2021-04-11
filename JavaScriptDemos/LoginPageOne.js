function validateUser(uName,pass){
    if(uName == pass){
        return "Login Successfull"
    }
    else{
        return "UnAuthorised Entry"
    }
}

function Validate(){
    let Name= document.getElementById('uNAme').value;
    let Passw =  document.getElementById('pass').value;
    console.log(Name,Passw);
    document.write(Name);
    document.write(Passw);
    let result = validateUser(Name,Passw);
}

