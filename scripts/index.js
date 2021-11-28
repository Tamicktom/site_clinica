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
    if (window.innerWidth > 992) {
        changeCarouselImg();
    }
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


//* Mascara para a caixa de cpf
function mascaraUser(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout('execmascara()', 1);
}

function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function cpfCnpj(v) {
    //Remove tudo o que não é dígito
    v = v.replace(/\D/g, "");
    if (v.length < 14) {
        //Coloca um ponto entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
            //Coloca um ponto entre o terceiro e o quarto dígitos
            //de novo (para o segundo bloco de números)
        v = v.replace(/(\d{3})(\d)/, "$1.$2")
            //Coloca um hífen entre o terceiro e o quarto dígitos
        v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    } else {
        //Coloca ponto entre o segundo e o terceiro dígitos
        v = v.replace(/^(\d{2})(\d)/, "$1.$2");
        //Coloca ponto entre o quinto e o sexto dígitos
        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        //Coloca uma barra entre o oitavo e o nono dígitos
        v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
        //Coloca um hífen depois do bloco de quatro dígitos
        v = v.replace(/(\d{4})(\d)/, "$1-$2");
    }
    return v;
}