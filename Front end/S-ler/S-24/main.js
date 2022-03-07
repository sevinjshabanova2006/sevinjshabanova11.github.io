let massiv=[1,4,34543,341,89,8989,564,223];
console.log(massiv);
console.warn("gltrkrt");
console.error("eowd");
massiv[2]=99;
console.log(massiv);
// function hesabla(a,b){
//   if(typeof a!="number" || typeof b!="number"){
//       console.error("not number");
//   }
//   else{
//     return a+b;
//   }
  
// }
// console.log(hesabla(4,5));
function hesabla(a,b){
    if(typeof a!="number" || typeof b!="number"){
        console.error("not number");
    }
    else{
        return a*b;
    }
}
console.log(hesabla(4,5));

let a=[1,4,5,7];
let cem=a.reduce(function(a,b){
    return a+b;
});
console.log(cem);

a.push(5);
console.log(a);
a.push(6);
console.log(a);
a.push("salam");
console.log(a);
// a.pop();
// console.log(a);
// a.pop();
// console.log(a);
let herfler=["a","t","y"];
console.log(herfler);
console.log(herfler.slice(1));