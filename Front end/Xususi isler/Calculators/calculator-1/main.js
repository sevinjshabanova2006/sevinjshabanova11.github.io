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
    document.getElementById(id).style.background="red";
}
function deyis(id){
    document.getElementById(id).style.background="#222222";
}