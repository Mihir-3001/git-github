const button=document.getElementById('button');
const content=document.getElementById('content');
const stop=document.getElementById('stop');

let number=0;

button.addEventListener('click',()=>{
    number++;
    content.innerHTML=`you clicked ${number} times`;
});


stop.addEventListener('click',()=>{ 
    number=0;
   content.innerHTML="";
});