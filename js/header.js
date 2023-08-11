const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

    this.classList.toggle("active");
    var acco_item = this.nextElementSibling;
    if (acco_item.style.display === "block") {
        acco_item.style.display = "none";
    } else {
        acco_item.style.display = "block";
    }
    });
}
