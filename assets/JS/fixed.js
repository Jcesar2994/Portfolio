(function(){

    let navbar = document.querySelector('#navbar');
    let main = document.querySelector('main');
    let navbarHeight = navbar.getBoundingClientRect().height;
    let breakPoint = main.offsetTop - navbarHeight;
    let isFixed = false;
    /* para obtener la altura del navbar*/
    let windowsPos;
    /*para guardar la posicion de la ventana */

    function updatePos(){
        windowsPos = window.scrollY;
    }
    /*para actualizar esa posicion */

    function onScroll(){
        updatePos ();

        if(windowsPos>=breakPoint && !isFixed){
            navbar.classList.remove('open');

            navbar.classList.add('navbar-fixed');
            main.style.cssText = 'margin-top: ' + navbarHeight + 'px;';
            isFixed =true;
        }else if (windowsPos<breakPoint&& isFixed){
            navbar.classList.remove('navbar-fixed');
            main.style.cssText = 'margin-top: ' + 0;
            isFixed = false;

        }
    }

    document.addEventListener('scroll', onScroll);
})()