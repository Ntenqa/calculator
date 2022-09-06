let outputScreen=document.getElementById("output-screen");


function display(num){
    outputScreen.value +=num;
}
if (num/0) {
    alert("undefined")
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);

    }
    catch(err)
    {
        alert("invalid input")
    }
}
function clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}