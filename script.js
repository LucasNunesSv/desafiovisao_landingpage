
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



// ------------------------------------

// document.querySelector

// Seleciona o primeiro elemento que encontrar, com base no argumento passado. O argunmento é similar aos seletores de CSS dentro das aspas.

const nav = document.querySelector('nav')
const produto = document.querySelector(".produtos a")

console.log(nav)
console.log(produto)

console.log(produto.href)

produto.remove();

nav.style.backgroundColor = "white";
nav.style.padding = "1rem";
nav.classList.add("ativah");

const botao = document.querySelector('button')

console.log(nav.dir)

const letter = "abc"

console.log("essas são as letras: " + letter)

const transformar = Number.MAX_VALUE("20") + 20;

const livro = {
    nome: "StarWars",
    anoFilme: "1986",
    genero: "ficção Científica"
}

console.log(2023 - livro.anoFilme)
console.log(livro.nome + " de " + livro.genero)

const texto = document.querySelector("p")

console.log(texto.innerHTML)


