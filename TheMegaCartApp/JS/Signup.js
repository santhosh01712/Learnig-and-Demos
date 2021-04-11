Signup = document.getElementById('Signup');
Signup.addEventListener('click',function(){
    let User = document.getElementById('User').value;
    let Email = document.getElementById('Email').value;
    let Mobile = document.getElementById('Mobile').value;
    let Pass = document.getElementById('Pass').value;
    let Cpass = document.getElementById('Cpass').value;
    if(User.length < 6  || User.length >10){
        alert('Enter a valid User name ');
    }
    else if(/^\d+$/.test(Mobile) == false){
        alert('Entee a Valid mobile number');
    }
    else if(Mobile.length !=10 ){
        alert('Enter 10 digit mobile number');
    }
    //if(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]$/.test(Pass)==true){
    else if(Pass != Cpass){
       alert('Password does not match');
    }
    else{
        let User_name = User;
        SignupData = Pass;
        localStorage.setItem(User_name, JSON.stringify(SignupData));
        alert("Signup succesfull for User "+User_name);
        document.getElementById('body-tag').innerHTML="Sign-up Successfull <a href='./Login.html'>Login Here</a>"
    }
});


