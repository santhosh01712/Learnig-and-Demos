function Notify(){
    //asking for permisson  returens a Promise
    let notificationObj={
        body:"Noptification From Santhosh",
        image:"./inages/image.jfif",
        icon:"./inages/icon.jfif",
        
    }
    Notification.requestPermission()
        .then((userResponse)=>{
            if(userResponse === "default"){
                alert("Please Approve or Deny the Permision");
            }else{
                new Notification("New Notification",notificationObj);
            }


    })

}