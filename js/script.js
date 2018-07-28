(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var navigationHeader = document.getElementById('navigationHeader');
    var modalLinks = document.getElementById('links');
    var modalBanners = document.getElementById('banners');
    var linksButton = document.getElementById('linksButton');
    var bannersButton = document.getElementById('bannersButton');
    var linksModal = document.getElementById('linksModal');
    var bannersModal = document.getElementById('bannersModal');
    var closeLinks = document.getElementById('closeLinks');
    var closeBanners = document.getElementById('closeBanners');
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
        if(window.innerWidth < 688) {
            change ? (navigationHeader.style.display = "block") : (navigationHeader.style.display = "none");
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

    var disableVisibleLinks = function() {
        linksModal.style.display = "none";
    };

    var disableVisibleBanners = function() {
        bannersModal.style.display = "none";
    };

    //listeners for action
    button.addEventListener('click', changeVisible);
    linksButton.addEventListener('click', addVisibleLinks);
    bannersButton.addEventListener('click', addVisibleBanners);
    closeLinks.addEventListener('click', disableVisibleLinks);
    closeBanners.addEventListener('click', disableVisibleBanners);
})();
