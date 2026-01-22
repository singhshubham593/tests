// function starts(){
//     for(let i=1;i<=6; i++){
//         let spaces=" ".repeat(6-i);
//         let str="* ".repeat(i);
//         console.log(spaces + str);
//     }
// }
// starts();

// prime numbers between 10 to 40
// let n = 39;
// for ( let i=11; i<=n;i++){
//     let ct=0;
//     for(let j=1;j<=i;j++){
//         if(i%j==0){
//             ct++;
//         }
//     }
//     if(ct==2){
//         console.log("i"+i,ct);
//     }else{
//         console.log(ct,i);
//     }
// } 

let a=153;
let sum=0;
// console.log(a.split( ));
function revNum(num){
    console.log(typeof num);
    console.log(num);
    let sd=num.toString().split("").length;
    let sds=num.toString();
    console.log(typeof sds);
    console.log(sds);
    while(num>0){
        let lt=num%10
        let s=lt*lt*lt
        sum +=s;
        num=Math.floor(num/10);
    }

    console.log(typeof sum);
    console.log(typeof a)
    if(a==sum){
        console.log("armstrong number");
    }
}

revNum(a);
// reverse a number
let v=a.toString().split("").reverse().join("");
console.log(v);
const bb=[1,2,3,4,5];
bb.reverse();
console.log(bb);

// perfect number 6=1+2+3
let no=7;
let result=0;
 for(let i=1;i<no;i++){
    if(no%i==0){
        result +=i;
    }
}
if(result==no){
    console.log("perfect number");
}else{
    console.log("not a perfect number");
}

let str=12321 ;
let rev=str.toString().split("").reverse().join("");
console.log(rev);
if(str==rev){
    console.log("palindrome");
}   else{
    console.log("not a palindrome");
}

let f=3;
let fs=1;
for(let i=1;i<=f;i++){
    fs=fs*i;
   
}
console.log(fs);

let text = 123;
let texts = "Hello";
let results = text.toString().split("").reverse();
let results1 = texts;
console.log(results); // "Hello World!"
console.log(results1); // "Hello World!"
console.log(typeof results); // "Hello World!"
console.log(typeof results1); // "Hello World!"
