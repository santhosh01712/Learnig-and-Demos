function add(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('Password').value;
    let email_id = document.getElementById('email_id').value;
    let dob = document.getElementById('dob').value;
    let phone_no = document.getElementById('phone_no').value;
    let country = document.getElementById('country').value;
    let PersonalDetails = {
        username,
        password,
        email_id,
        dob,
        phone_no,
        country,
    }    
    sessionStorage.setItem('username',username);
    sessionStorage.setItem(username,JSON.stringify(PersonalDetails));
}