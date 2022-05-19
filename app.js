const sections = document.querySelectorAll('section');
const sectionBtns= document.querySelectorAll('.controls');
const sectionBtn= document.querySelectorAll('.control');
const allSections= document.querySelector('.mainContent');


function PageTransitions(){
    for (let i=0; i<sectionBtn.length;i++){
        sectionBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.activeBtn');
            currentBtn[0].className=currentBtn[0].className.replace('activeBtn','');
            this.className+='activeBtn';
        })
    }

    // sections active class
    allSections.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if (id){
            sectionBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element=document.getElementById(id);
            element.classList.add('active')
        }
    })

}

PageTransitions();

const checkbox=document.getElementById('checkbox');
checkbox.addEventListener('change',()=>{
    document.body.classList.toggle('light')
  
})


