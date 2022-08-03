// =======================
// =======Toggle =========
// =======================
let toggle=document.getElementById('ham-svg');

let navDiv=document.querySelector('.nav');

toggle.addEventListener('click',()=>{
    navDiv.classList.toggle('show');
    toggle.classList.toggle('rotate');
});

window.addEventListener('resize',()=>{
    navDiv.classList.remove('show');
    toggle.classList.remove('rotate');
});

// =======================
// ======Learn More=======
// =======================
let learnMore=document.querySelectorAll('.learn-more');

for(let i=0;i<learnMore.length;i++){
    learnMore[i].addEventListener('mouseover',()=>{
        learnMore[i].setAttribute('style','--learnMoreAfterOpacity:1;transform: scale(1.1)');
    });
    learnMore[i].addEventListener('mouseout',()=>{
        learnMore[i].style.setProperty('--learnMoreAfterOpacity',0.4);
        learnMore[i].style.setProperty('transform','scale(1)');
    });
}





