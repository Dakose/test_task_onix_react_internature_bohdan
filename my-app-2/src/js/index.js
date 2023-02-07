// header
const nav = document.querySelector('nav');
      menuToggle = document.getElementById('menu-toggle');
      navItem = Array.from(document.querySelectorAll('.nav__link'));


menuToggle.addEventListener('click', () =>{
    nav.classList.toggle('active-menu');
});

navItem.forEach(item => item.addEventListener('click', (e) =>{
    nav.classList.remove('active-menu');
    

    for(let i = 0; i < navItem.length; i++){
      
        if(navItem[i] == e.target){
            navItem[i].classList.add('active-link');
        }else{
            navItem[i].classList.remove('active-link');
        }
    }

}));

// change header bg-color on scroll
const header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    
    if(scrollY >= 30) header.classList.add('active');
    else header.classList.remove('active');
})

// =========================================
// upbtn


function upBtnScroll() {
    const upBtn = document.querySelector('.up-btn');
    if(scrollY >= 800) upBtn.classList.add('active');
    else upBtn.classList.remove('active');
}

window.addEventListener('scroll', upBtnScroll);

document.getElementById('current-year').innerText = new Date().getFullYear();
