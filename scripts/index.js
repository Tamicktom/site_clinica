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

//* Código para verificar o tamanho da window

window.addEventListener('resize', windowSizeUpdate);


function windowSizeUpdate() {
    var maxWindowWidth = window.innerWidth;
    var maxWindowHeight = window.innerHeight;
    if (window.innerWidth > 992) {
        changeCarouselImg();
    }
    console.log('window size - height[' + maxWindowHeight + 'px]' + ' | width[' + maxWindowWidth + 'px]');
}

$(document).ready(function() {
    windowSizeUpdate();
})

function changeCarouselImg() {
    if (window.innerWidth > 992) {
        carouselChangeImgToBigger();
    } else {
        changeCarouselImgToSmaller();
    }
}

function carouselChangeImgToBigger() {
    for (var i = 1; i <= 4; i++) {
        var carouselImg = document.querySelector("#carouselImg" + i);
        carouselImg.src = 'sources/images/BigBanner_img_' + i + '.png';
        console.log('funfos');
    }
}

function changeCarouselImgToSmaller() {
    for (var i = 1; i <= 4; i++) {
        var carouselImg = document.querySelector("#carouselImg" + i);
        carouselImg.src = 'sources/images/SmallBanner_img_' + i + '.png';
        console.log('funfos');
    }
}