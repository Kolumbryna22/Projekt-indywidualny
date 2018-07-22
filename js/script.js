(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var section = document.getElementsByTagName('section');
    var change = true;

    var changeSection = function(x) {
        var i = 0;
        while(section[i]) {
            section[i].style.paddingLeft = x ? "203px" : "15px";
            i++;
        }
    };

    window.addEventListener('resize', function(){
        if(window.innerWidth > 688) {
            nav.style.display = "block";
            change = false;
        }
        else {
            nav.style.display = "none";
            change = true;
        }
        changeSection(!change);
    });

    var changeVisible = function() {
        change ? (nav.style.display = "block") : (nav.style.display = "none");
        if(window.innerWidth > 688) {
            changeSection(change);
        }
        change = !change;
    };

    button.addEventListener('click', changeVisible);
})();