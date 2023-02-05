var dob=document.querySelector('.date')
var luckynumber=document.querySelector('.number')
var button=document.querySelector('.checknumber')
var output=document.querySelector('#output')


button.addEventListener('click',function (){

    console.log(dob.value +" "+luckynumber.value)

    // output.innerText=dob.value;
  
    let lucky1=Number(luckynumber.value)
    let total=sum1(dob.value);
    checklucky(total,lucky1)

})
function sum1(digit){
    let a=digit.replaceAll("-","");
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum+=Number(a[i])
    }
    console.log(a);
    console.log(sum);
    return sum;

}
function checklucky(total,number){
    if(total&&number){
    if(total%number===0){
        console.log("your Birthday lucky...!")
        output.innerText="your Birthday is lucky...!😃🎌";
    }else{
 console.log("your Birthday Not lucky...!")
 output.innerText="your Birthday is Not lucky...!🐻";
    }
}else{
    console.log("Invalid input!") ;
    output.innerText="Invalid input!😡";
}

}





 
 

