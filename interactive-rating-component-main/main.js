let button = document.querySelector(".submit-response");
let container2 =document.querySelector(".container2");
let container =document.querySelector(".container");
let Rating = document.querySelectorAll(".rating");
let addValue=document.querySelector(".addValue")

Rating.forEach(value =>{
    let val = ''
  value.addEventListener('click',(e)=>{
     val = e.target.innerHTML;
     addValue.innerHTML = val;
  })
 
   
})



button.addEventListener('click', ()=>{
    container.style.display = "none";
    container2.style.display = "block";
    
})
