function  GetData(){
    alert("About to get data");

    //Step 1 Create xhr object
    const xhr =  new XMLHttpRequest();

    //Step2 create URL & use open() Creating connection 

    const url = 'http://127.0.0.1:5500/Calculator/Ajax.json'
    xhr.open('GET',url);

    //Step 3 telling what to do using onload()
    xhr.onload = () =>{
        console.log('Getting the Data');    
        let dataObj  = JSON.parse(xhr.responseText);
        console.log(dataObj);
        for(let key in dataObj){
            dl = document.createElement('dl');
            dd = document.createElement('dd');
            dt = document.createElement('dt');
            dt.innerHTML = `${key}`;
            dd.innerHTML = `${dataObj[key]}`;
            dt.appendChild(dd);
            dl.appendChild(dt);
            document.getElementById('data').appendChild(dl);
            

            
        }


    }

    //Step 4 Sending the data to server which is optional
    xhr.send()
}