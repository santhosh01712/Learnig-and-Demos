function Process(){
    document.getElementById('state').innerHTML = `<option>select</option`
    let selectedCountry = document.getElementById('country').value;
    
    const xhr = new XMLHttpRequest();
    
    const url='http://127.0.0.1:5500/CountryState.json'

    xhr.open('GET',url);

    xhr.onload = () =>{
        let theData = JSON.parse(xhr.responseText);
        let StateArray=theData[selectedCountry];
        for(let data in StateArray){
            op = document.createElement('option');
            op.innerHTML=`${StateArray[data]}`;
            op.value = `${StateArray[data]}`;
            document.getElementById('state').appendChild(op);
        }
    }
    xhr.send();
}
function Display(){
    let selectedCountry = document.getElementById('country').value;
    let selectedState = document.getElementById('state').value;
    document.getElementById('selectedValue').innerHTML = `The Selected Country is ${selectedCountry}, and the selected State is ${selectedState}`;
}
