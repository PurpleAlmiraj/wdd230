document.addEventListener("DOMContentLoaded", function() {
    var banner = document.getElementById("meetAndGreetBanner");
    var closeBtn = document.getElementById("closeBannerButton");

    
    function isMeetAndGreetDay() {
        var today = new Date().getDay();
        return today >= 1 && today <= 3; 
    }

   
    function toggleBannerVisibility() {
        if (isMeetAndGreetDay()) {
            banner.style.display = "block";
        } else {
            banner.style.display = "none";
        }
    }


    function closeBanner() {
        banner.style.display = "none";
    }


    closeBtn.addEventListener("click", closeBanner);


    toggleBannerVisibility();
});
