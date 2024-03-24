function openMenu() {
    const links = document.querySelector('.links')
    const burger = document.querySelector('.burger')

    links.classList.toggle('active')
    burger.classList.toggle('open')
}