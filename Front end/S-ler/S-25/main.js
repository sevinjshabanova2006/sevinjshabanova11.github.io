// for(let i=1;i<100;i=i+1){
//     if(i%3==0){
//      console.log(i);
//     }
// }
// let eded=Number(prompt("eded daxil edin:"));
// for (let i=1;i<=eded;i+1){
//     if(eded%i==0){
//         console.log(i+"ededin bolenidir");
//     }
// }
// let eded=10;
// let say=0;
// for (let i=1;i<=eded;i+1){
//     if(eded%i==0){
//         say++;
//     }
// }
// console.log(say+"qeder");
// for(let i=1;i<=6;1=i+1){
//     for(let j=1;j<=6;j=j+1){
//        if(i==1 && j==4){
//            console.log('*');
//        }
//     }
// }
for (let i=1;i<=50;i++){
     let sade=true;
     for(j=2;j<i;j++){
         if(i%j==0)
         sade=false
         break;
     }
     if(sade){
         console.log(i);
     }
}