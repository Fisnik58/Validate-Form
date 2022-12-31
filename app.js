const inpt1 = document.getElementById('input1'); 
const span1 =document.getElementById('span1');
function myFunction(){
   
    if(inpt1.value.length < 5 || inpt1.value.length > 10){
        inpt1.style.backgroundColor='pink';
        span1.style.display="block";

    }else{
        inpt1.style.backgroundColor='green';
        span1.style.display="none";
    }

}
const inpt2 = document.getElementById('input2'); 
const span2 =document.getElementById('span2');
function myFunction1(){
   
    if(inpt2.value.length <= 6){
        inpt2.style.backgroundColor='pink';
        span2.style.display="block";
    }else{
        inpt2.style.backgroundColor='green';
        span2.style.display="none";
    }
}
function myfunction3(){
if( (inpt1.value.length < 5 || inpt1.value.length > 10) || inpt2.value.length <= 6 ){
   return;
}else{
    const username =document.createElement('h1');
    const password =document.createElement('h1');
    const information=document.getElementById("information");
    username.innerText=inpt1.value;
    password.innerText=inpt2.value;
    information.append(username)
    information.append(password)
    
}
}