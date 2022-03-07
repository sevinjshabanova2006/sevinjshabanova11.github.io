let ad1;
let ad2;
let say1=0;
let say2=0;
function Start(){
   document.getElementById("table").style.display="block";
   document.getElementsByTagName("form")[0].style.display="none";
   ad1=document.getElementsByTagName("input")[0].value;
   ad2=document.getElementsByTagName("input")[1].value;
   document.getElementById("p1").innerHTML=`${ad1}`;
   document.getElementById("p2").innerHTML=`${ad2}`;
}
