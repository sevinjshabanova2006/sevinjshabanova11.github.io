function Func(deyisen){
    Calculator.cavab.value+=deyisen;
}
function Beraber(){
    Calculator.cavab.value=eval(Calculator.cavab.value);
}
function Clear(){
    Calculator.cavab.value="0";
}
function color(id){
    document.getElementById(id).style.background="rgb(34, 90, 82)";
    document.getElementById(id).style.color="white";
}
function deyis(id){
    document.getElementById(id).style.background="rgb(228 , 224 , 224)";
    document.getElementById(id).style.color="rgb(78, 74, 74)";
}