(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var header = document.getElementById('header');
    var modalLinks = document.getElementById('links');
    var modalBanners = document.getElementById('banners');
    var linksButton = document.getElementById('linksButton');
    var bannersButton = document.getElementById('bannersButton');
    var linksModal = document.getElementById('linksModal');
    var bannersModal = document.getElementById('bannersModal');
    var closeModal = document.getElementById('closeModal');
    var change = window.innerWidth > 688 ? false : true;

    //functions for responsive web
    var changeSection = function(x) {
        var section = document.getElementsByTagName('section');
        var i = 0;
        while(section[i]) {
            section[i].style.paddingLeft = x ? "203px" : "15px";
            i++;
        }
    };

    window.addEventListener('resize', function(){
        if(window.innerWidth > 688) {
            nav.style.display = "block";
            header.style.display = "flex";
            change = false;
        }
        else {
            nav.style.display = "none";
            header.style.display = "none";
            change = true;
        }
        changeSection(!change);
    });

    var changeVisible = function() {
        change ? (nav.style.display = "block") : (nav.style.display = "none");
        if(window.innerWidth < 688) {
            change ? (header.style.display = "flex") : (header.style.display = "none");
        }
        if(window.innerWidth > 688) {
            changeSection(change);
        }
        change = !change;
    };

    //function for modals
    var addVisibleLinks = function() {
        linksModal.style.display = "block";
    };
    
    var addVisibleBanners = function() {
        bannersModal.style.display = "block";
    };

    var disableVisible = function() {
        linksModal.style.display = "none";
        bannersModal.style.display = "none";
    };

    button.addEventListener('click', changeVisible);
    linksButton.addEventListener('click', addVisibleLinks);
    bannersButton.addEventListener('click', addVisibleBanners);
    closeModal.addEventListener('click', disableVisible);
})();