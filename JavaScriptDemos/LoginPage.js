export default class User{
    validateUser(uName,pass){
        if(uName == pass){
            return 'Login Successfulll';
        }
        else{
            return 'Unauthorised Access';
        }
    }
}