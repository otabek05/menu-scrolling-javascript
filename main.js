window.addEventListener('scroll', ()=>{
    let m=document.getElementById('n');
    let w=window.innerHeight;
    let mh=m.getBoundingClientRect().top;
    if(window.scrollY>160){
       m.classList.add('active');
       
    }
    else if(window.scrollY<60) {m.classList.remove('active')};

    m1=document.querySelectorAll('.main')
    for(i=0;i<m1.length;i++){
        let wh=window.innerHeight;
        let mh=m1[i].getBoundingClientRect().top;
        let vh=120;
        if(mh<wh-vh){
            m1[i].classList.add('active2')
            console.log('reached')
        }
        else m1[i].classList.remove('active2')
             
    }
   


    

    
})
m1=document.querySelectorAll('.main')
console.log(m1)




   
