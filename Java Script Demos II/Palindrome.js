function checkPalindrome(st){
    st=st.toLowerCase();
    return st.split("").reverse().join("") == st ? true:false;
}
console.log(checkPalindrome('malayalam'));

strinput = "Radha Krinana Narayan Mpoorthy";
tempArray = strinput.split(" ");
console.log(tempArray[0][0]+'.'+tempArray[1][0]+'.'+tempArray.slice(2,).join(" "));


varstring ='thequickbrownfoxjumpsoverthelazydog';
function checkUnqiueCharacters(varstring){
    return varstring.split("").filter((element,index,array) => array.indexOf(element)===index).join("");

}
console.log(checkUnqiueCharacters(varstring));
