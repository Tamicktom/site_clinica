
//~> Pega a paleta de cores da imagem
var img = document.createElement('img');
img.setAttribute('src', user.profilePicture_src);

img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()
    for (var swatch in swatches)
        if (swatches.hasOwnProperty(swatch) && swatches[swatch])
            console.log(swatch, swatches[swatch].getHex())
    var tpmColor = rgbToHex(swatches.Vibrant.rgb[0], swatches.Vibrant.rgb[1], swatches.Vibrant.rgb[2]);
    loginPanel.style.background = tpmColor;
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}