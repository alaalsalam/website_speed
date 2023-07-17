const navbarBrand = document.querySelector('.brand');
const navbarNavLi = document.querySelectorAll('.header .nav-list li');
const breadcrumpLi = document.querySelectorAll('.breadcrump-list li');
const innerPages = document.querySelectorAll('.inner-pages');
const loadAnimate = document.querySelectorAll('.load-animate');
navbarBrand.classList.add('active');
navbarNavLi.forEach((item) => {
    item.classList.add('active-li');
});
breadcrumpLi.forEach((item) => {
    item.classList.add('active-li');
});
innerPages.forEach((item) => {
    item.classList.add('active');
});

window.addEventListener("scroll", (event)=>{
    var homeWelcome = document.querySelectorAll('.image-animate');
    var windowHeight = window.innerHeight;
    var elementVisible = 0;
    var sectionAnimation = document.querySelectorAll('.section-animation');
    sectionAnimation.forEach((item) => {
        var elementTop = item.getBoundingClientRect().y;
        if (elementTop < windowHeight - elementVisible) {
            item.classList.add("active");
        }
    })
    loadAnimate.forEach((item) => {
        item.classList.add('active');
    });
    var bannersCol = document.querySelectorAll('.buy-car .steps .load-animate');
    animatedCol(bannersCol)
    var advantages = document.querySelectorAll('.item2');
    animatedCol(advantages)
    var warranties = document.querySelectorAll('.item3');
    animatedCol(warranties)
    var servicesCol = document.querySelectorAll('.services .col');
    animatedCol(servicesCol)
    var owlThemeCol = document.querySelectorAll('.owl-theme-22 .item');
    animatedCol(owlThemeCol)
    var owlThemeCol33 = document.querySelectorAll('.owl-theme-33 .item');
    animatedCol(owlThemeCol33)
})

function animatedCol(col, dalay = .3){
    var count = dalay;
    col.forEach((item) => {
        item.style.transitionDelay = count + 's';
        count += .3;
    })
}