// *
// **
// ***
// ****
// *****
for (let i = 1; i <= 5; i++) {
  console.log("* ".repeat(i));
}

//     *
//    **
//   ***
//  ****
// *****

for(let i=1;i<=5;i++){
  let sp=" ".repeat(5-i);
  let st="*".repeat(i);
  console.log(sp+st);
}

//     *
//    ***
//   *****
//  *******
// *********
for(let i=1;i<=5;i++){
  let sp=" ".repeat(5-i);
  let st="*".repeat(2*i-1);
  console.log(sp+st);
}
// *********
//  *******
//   *****
//    ***
//     *

let n=6;
for(let i=1;i<=n;i++){
  let sp=" ".repeat(i-1);
  let st="*".repeat(2*(n-i+1)-1);
  console.log(sp+st);
}

//     *
//    * *
//   *   *
//  *     *
// *********
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(" ".repeat(n - i) + "*");
  } else if (i === n) {
    console.log("*".repeat(2 * n - 1));
  } else {
    console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// Upper half
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

// Lower half
for (let i = n - 1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *
// Upper hollow
for (let i = 1; i <= n; i++) {
  if (i === 1) {
    console.log(" ".repeat(n - i) + "*");
  } else {
    console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}

// Lower hollow
for (let i = n - 1; i >= 1; i--) {
  if (i === 1) {
    console.log(" ".repeat(n - i) + "*");
  } else {
    console.log(" ".repeat(n - i) + "*" + " ".repeat(2 * i - 3) + "*");
  }
}
// Number Pyramid
//     1
//    121
//   12321
//  1234321
// 123454321

// let n = 5;
for (let i = 1; i <= n; i++) {
  let left = "";
  let right = "";
  
  for (let j = 1; j <= i; j++) left += j;
  for (let j = i - 1; j >= 1; j--) right += j;

  console.log(" ".repeat(n - i) + left + right);
}

// Pascal Triangle
  //     1
  //    1 1
  //   1 2 1
  //  1 3 3 1
  // 1 4 6 4 1
let arr = [];

for (let i = 0; i < n; i++) {
  arr[i] = [];
  for (let j = 0; j <= i; j++) {
    if (j === 0 || j === i) arr[i][j] = 1;
    else arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
  }
}

for (let i = 0; i < n; i++) {
  console.log(" ".repeat(n - i) + arr[i].join(" "));
}

//Butterfly Pattern
// *       *
// **     **
// ***   ***
// **** ****
// *********
// **** ****
// ***   ***
// **     **
// *       *
 
// let n = 5;

// Upper half
for (let i = 1; i <= n; i++) {
  let stars = "*".repeat(i);
  let spaces = " ".repeat(2 * (n - i));
  console.log(stars + spaces + stars);
}

// Lower half
for (let i = n; i >= 1; i--) {
  let stars = "*".repeat(i);
  let spaces = " ".repeat(2 * (n - i));
  console.log(stars + spaces + stars);
}

//Floyd’s Triangle
// 1
// 2 3
// 4 5 6
// 7 8 9 10
 
// let n = 5;
// let num = 1;

for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num++ + " ";
  }
  console.log(row);
}







