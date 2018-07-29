(function() {
    'use strict';

    var button = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var navigationHeader = document.getElementById('navigationHeader');
    var linksButton = document.getElementById('linksButton');
    var bannersButton = document.getElementById('bannersButton');
    var linksModal = document.getElementById('linksModal');
    var bannersModal = document.getElementById('bannersModal');
    var closeLinks = document.getElementById('closeLinks');
    var closeBanners = document.getElementById('closeBanners');
    var change = window.innerWidth > 688 ? false : true;
    var ctx = document.getElementById('myChart').getContext('2d');

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

    //chart
    var chart = new Chart(ctx, {
        // 1
        type: 'bar',
        data: {
            // 2
            labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10"],
            // 3
            datasets: [{
                // 4
                label: "Signups",
                // 5
                backgroundColor: '#8DBEC8',
                borderColor: '#8DBEC8',
                // 6
                data: [ 52, 51, 41, 94, 26, 6, 72, 9, 21, 88 ],
            },
            {
                label: "FTD",
                backgroundColor: '#F29E4E',
                borderColor: '#F29E4E',
                data: [ 6, 72, 1, 0, 47, 11, 50, 44, 63, 76 ],
            },
            {
                label: "Earned",
                backgroundColor: '#71B374',
                borderColor: '#71B374',
                data: [ 59, 49, 68, 90, 67, 41, 13, 38, 48, 48 ],
                // 7
                hidden: true,
            }]
        },
    });
    
    //listeners for action
    button.addEventListener('click', changeVisible);
    linksButton.addEventListener('click', addVisibleLinks);
    bannersButton.addEventListener('click', addVisibleBanners);
    closeLinks.addEventListener('click', disableVisibleLinks);
    closeBanners.addEventListener('click', disableVisibleBanners);
})();
