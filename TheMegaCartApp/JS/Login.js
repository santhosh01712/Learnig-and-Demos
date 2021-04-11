function Login(){
    function load_login() {
        localStorage.removeItem('logged_in_user');
        localStorage.removeItem('items');
    };
    let login = document.getElementById('Login');
    login.addEventListener('click',function() {
    uname = document.getElementById('User').value;
    pass = document.getElementById('Pass').value; 
    try {
        StoredData=JSON.parse(localStorage.getItem(uname));
        if(StoredData != null){
            if(pass != StoredData){
                alert('Wrong Password!!! Try Again!');

            }
            else{
                alert('Login Successfull');
                localStorage.setItem('logged_in_user',JSON.stringify(uname));
                localStorage.setItem('items',JSON.stringify([]));
                function load_home() {
                    document.getElementById('log').innerHTML='<object type="text/html" data="main.html" ></object>';
                }
                load_home();
            }
        }
        else{
            alert('User not found!!!')
        }
    }
    catch(err) {
        alert('User is not available, Please Sign-up');
    }
});
}


