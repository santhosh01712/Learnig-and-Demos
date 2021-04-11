sample_Input = "Albert Einstein was born in Ulm, on 14/03/1879.";
Sample_Output = '14/03/1879';
var regex= /\d{1,2}\/\d{2}\/\d{4}/;
console.log(sample_Input.match(regex));

//Write a pattern that matches e-mail addresses. Syntax: localpart@domain
//Note: The local part ( The text before @ symbol ) contains the following ASCII characters.
//Uppercase (A-Z) and lowercase (a-z) English letters.
//Digits (0-9).
//Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
//Character . (dot) provided that it is not the first or last character and it will not come one after the other.''''

emailRegex=/^([^\.])[\w!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]{3})*$/;
test1= "JohnDoe.12#4@gmail.com";
test2 = "John..Deo#4@gmail.com";
