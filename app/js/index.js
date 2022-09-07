"use strict"

function headerOnScroll() {
    const header = document.getElementById("header");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        header.style.background = "#1f1f1f";
        header.style.boxShadow = "0 1px 4px #0a0a0a4d";
    }
    else if(document.body.scrollTop === 0 || document.documentElement.scrollTop === 0){
        header.style.background = "transparent";
        header.style.boxShadow = "none"
    }
};

window.onscroll = function() {
    headerOnScroll()
};

(function () {
    toggleMobMenu()
    toggleSearch()
})();
