let eded=Number(prompt("Eded daxil edin"));
console.log(eded);
if(eded%5==0)
{
    console.log("eded 5e bolunur");
}
else{
    console.log("eded 5e bolunmur");
}
let eded1=Number(prompt("Ikinci ededi daxil edin"));
let cem=eded+eded1;
console.log("cem="+cem)
if(cem>100)
{
    console.log("cem 100den boyukdur");
}
else if(cem<100)
{
    console.log("cem 100den kicikdir");
}
else{
    console.log("eded 100e beraberdir");
}