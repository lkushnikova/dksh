//import axios from 'axios';
import AOS from 'aos';
const age=document.getElementById('course-age');
const courseType=document.getElementById('course-type');
const courseForma=document.getElementById('course-forma');
const age7=document.getElementsByClassName('course-age-7');
const age13=document.getElementsByClassName('course-age-13');
const mobileTopBlock=document.getElementById('mobile-top-block');
window.addEventListener('load', () => {

    document.getElementById('checkBurgerId').addEventListener('click',()=>{
        if(mobileTopBlock.style.display=="flex"){
            mobileTopBlock.style.display="none";
        }
        else{
            mobileTopBlock.style.display="flex";
        }
        })



document.getElementById('for-course-age').addEventListener('click',()=>{
if(age.style.display=="block"){
    age.style.display="none";
}
else{
    age.style.display="block";
}
    
})
document.getElementById('for-course-forma').addEventListener('click',()=>{
    if(courseForma.style.display=="block"){
        courseForma.style.display="none";
    }
    else{
        courseForma.style.display="block";
    }
        
    })
    document.getElementById('for-course-type').addEventListener('click',()=>{
        if(courseType.style.display=="block"){
            courseType.style.display="none";
        }
        else{
            courseType.style.display="block";
        }
            
        })
        document.getElementById('for-course-age-7').addEventListener('click',()=>{
            for(let i=0;i<age13.length;i++){
                age13[i].style.display="none";
            }
            
                
            }) 
});
