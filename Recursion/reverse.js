function ab(a,i,b){
    if(i>=b){
        return;
    }
    let ac=a[i];
    a[i]=a[b];
    a[b]=ac;
    ab(a,i+1,b-1);
}
function a(){
    var a=[1,2,3,4,5];
    let i=0;
    let b=a.length-1;
    ab(a,i,b);
    console.log(a);
}
a();