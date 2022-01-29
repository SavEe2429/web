function myFunction(x) {
    x.classList.toggle("change");
  }

$(document).ready(function() {
    $(".hamberger").on("click", function() {
        $(".nav-grid .fr").toggleClass("open");
    });
});