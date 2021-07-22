let tab = document.querySelectorAll('.tabs-items');
let content = document.querySelectorAll('.content-items');

tab.forEach((elem) => elem.addEventListener('click', function(e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#','');

    tab.forEach((item) => 
    {item.classList.remove('tabs-items-active');
    })

    content.forEach((item) => {
        item.classList.remove('content-items-active');
    })

    elem.classList.add('tabs-items-active');
    document.getElementById(id).classList.add('content-items-active');
}))


