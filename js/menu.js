
const itemLinks = document.querySelectorAll('.header-item')
const navHeader = document.querySelectorAll('.nav-header')
const navHeaderLink = document.querySelectorAll('.nav-header-item__link')
const close = document.querySelectorAll('.nav-header-btn')

for (let i = 0; i < itemLinks.length; i++) {
    itemLinks[i].addEventListener('click', function(e) {
        for (let ii = 0; ii < navHeader.length; ii++) {
          if (ii !== i) {
            navHeader[ii].classList.remove('active')
          }
        }
        navHeader[i].classList.toggle('active');

        close[i].addEventListener('click',function(e){
            navHeader[i].classList.remove('active')
        })
        for(let y = 0; y < navHeaderLink.length; y++){
            navHeaderLink[y].addEventListener('click',function(e){
                    navHeader[i].classList.remove('active')
            })
        }
    })
}



function removeNav() {
    const windowTop = window.pageYOffset;
    const navHeader = document.querySelectorAll('.nav-header')
        if((windowTop)){
            navHeader.forEach(function(e){
                e.classList.remove('active')
            })
        }
}
window.addEventListener('scroll', function(){
    removeNav()
})



