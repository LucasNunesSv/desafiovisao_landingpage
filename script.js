
window.addEventListener("scroll", function(){
    let header = this.document.querySelector('#header')
    header.classList.toggle('scroll-bt', this.window.scrollY > 0)
    header.classList.toggle('scroll-tp', this.window.scrollY <= 0)
});

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropdownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open');
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

function closeMenu() {
    dropdownMenu.classList.toggle('open')
    toggleBtnIcon.classList = 'fa-solid fa-bars'
}

