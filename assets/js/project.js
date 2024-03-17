const hamburgerHandler = () =>{
    const menu = document.querySelector('.menu');
    menu.classList.toggle('showMenu')
}

const upHandler = () =>{
    document.documentElement.style.scrollBehavior = 'smooth';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const searchHandler = () => {
    const searchBox = document.querySelector('.search_box_section');
    const searchIcon = document.querySelector('.fa-search') || document.querySelector('.fa-times');
    searchBox.classList.toggle('showSearchBox');
    if (searchBox.classList.contains('showSearchBox')) {
        searchIcon.classList.remove('fa-search');
        searchIcon.classList.add('fa-times');
    } else {
        searchIcon.classList.remove('fa-times');
        searchIcon.classList.add('fa-search');
    }
};
