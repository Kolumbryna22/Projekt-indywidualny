(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var change = true;

    window.addEventListener('resize', function(){
        if(window.innerWidth > 688) {
            nav.style.display = "block";
            change = false;
        }
        else {
            nav.style.display = "none";
        }
    })

    var changeVisible = function() {
        change ? (nav.style.display = "block") : (nav.style.display = "none");
        change = !change;
    }

    button.addEventListener('click', changeVisible);
})();