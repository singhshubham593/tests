function pa(abc, start, end){
    if(start >= end){
         console.log(abc);
        return true;
    }
    
    let temp=abc[start];
    abc[start]=abc[end];
    abc[end]=temp;
    pa(abc, start+1, end-1);
}
function main(){
    let str = "madam";
    const abc=str.split("");
     
    let bb=pa(abc,0,abc.length-1);
    let abcStr=abc.join("");
    console.log(str === abcStr);
    console.log(abc );
    console.log(abcStr);
    console.log(typeof abcStr ,typeof str);

        
}
main();