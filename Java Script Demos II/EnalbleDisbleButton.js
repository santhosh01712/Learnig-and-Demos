function Enable(){
    document.getElementById("theButton").disabled = "false";
}
function Disable(){
    document.getElementById("theButton").disabled = "true";
    document.getElementById("theButton").cursor = "not-allowed";
}