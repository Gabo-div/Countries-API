const btnDark = document.querySelector('.btn-theme');
let tema;

if (localStorage.getItem('tema') !== '') {

    tema = localStorage.getItem('tema');

    if (tema === 'dark') {
        document.body.classList = 'dark-mode'
    }

}

btnDark.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');


    if (document.body.classList == 'dark-mode') {
        btnDark.innerHTML = `<li class="fas fa-moon"></li> Dark Mode`

        tema = 'dark'
        localStorage.setItem('tema', tema)
    } else {

        tema = 'light'
        localStorage.setItem('tema', tema)

    }

});