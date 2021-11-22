//* Código para colocar um timer para realizar o scroll
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 150, function() {
                window.location.hash = hash;
            });
        }
    });
});