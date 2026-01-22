// let ab="";
// for(let i=1;i<=4;i++){
//     ab="";
//     for(let j=1;j<=i;j++){
//         ab+="* ";
//     }
//     console.log(ab);
// }

let n=76;

let  sum=0;
for(let i=0;i<=n;i++){
 sum+= n%10;
 n=Math.floor(n/10);
}
console.log(sum);