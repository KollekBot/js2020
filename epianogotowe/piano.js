document.addEventListener('keydown', function (event) {

    if (event.keyCode == 81) { cbleep.play(); }
    else if (event.keyCode == 87) {dbleep.play(); }
    else if (event.keyCode ==50) {csbleep.play(); }
    else if (event.keyCode == 51) {dsbleep.play(); }
    else if (event.keyCode == 69) {ebleep.play(); }
    else if (event.keyCode == 82) {fbleep.play(); }
    else if (event.keyCode == 53) {fsbleep.play(); }
    else if (event.keyCode == 84) {gbleep.play(); }
    else if (event.keyCode == 54) {gsbleep.play(); }
    else if (event.keyCode == 89) {ableep.play(); }
    else if (event.keyCode == 55) {asbleep.play(); }
    else if (event.keyCode == 85) {hbleep.play(); }
    else if (event.keyCode == 73) {c1bleep.play(); }
    else if (event.keyCode == 57) {cs1bleep.play(); }
    else if (event.keyCode == 79) {d1bleep.play(); }
    else if (event.keyCode == 48) {ds1bleep.play(); }
    else if (event.keyCode == 80) {e1bleep.play(); }
    else if (event.keyCode == 219) {f1bleep.play(); }
    else if (event.keyCode == 89) {fs1bleep.play(); }
    else if (event.keyCode == 89) {g1bleep.play(); }
    else if (event.keyCode == 89) {gs1bleep.play(); }
    else if (event.keyCode == 89) {a1bleep.play(); }
    else if (event.keyCode == 89) {as1bleep.play(); }
    else if (event.keyCode == 89) {h1bleep.play(); }
});

var cbleep = new Audio()
cbleep.src = "Music_Note/C.wav";

var dbleep = new Audio()
dbleep.src = "Music_Note/D.wav";

var csbleep = new Audio()
csbleep.src = "Music_Note/C_s.wav";


var dsbleep = new Audio()
dsbleep.src = "Music_Note/D_s.wav";

var ebleep = new Audio()
ebleep.src = "Music_Note/E.wav";

var fbleep = new Audio()
fbleep.src = "Music_Note/F.wav";

var fsbleep = new Audio()
fsbleep.src = "Music_Note/F_s.wav";

var gbleep = new Audio()
gbleep.src = "Music_Note/G.wav";

var gsbleep = new Audio()
gsbleep.src = "Music_Note/G_s.wav";

var ableep = new Audio()
ableep.src = "Music_Note/A.wav";

var asbleep = new Audio()
asbleep.src = "Music_Note/Bb.wav";

var hbleep = new Audio()
hbleep.src = "Music_Note/B.wav";



var c1bleep = new Audio()
c1bleep.src = "Music_Note/C1.wav";

var cs1bleep = new Audio()
cs1bleep.src = "Music_Note/C_s1.wav";

var d1bleep = new Audio()
d1bleep.src = "Music_Note/D1.wav";

var ds1bleep = new Audio()
ds1bleep.src = "Music_Note/D_s1.wav";

var e1bleep = new Audio()
e1bleep.src = "Music_Note/E1.wav";

var f1bleep = new Audio()
f1bleep.src = "Music_Note/F1.wav";

var fs1bleep = new Audio() // nie mam juz nie ktorych dzwiekow :(
fs1bleep.src = "Music_Note/F_s1.wav";

var g1bleep = new Audio()
g1bleep.src = "Music_Note/G1.wav";

var gs1bleep = new Audio()
gs1bleep.src = "Music_Note/G_s1.wav";

var a1bleep = new Audio()
a1bleep.src = "Music_Note/A1.wav";

var h1bleep = new Audio()
h1bleep.src = "Music_Note/h1.wav";

var as1bleep = new Audio()
as1bleep.src = "Music_Note/Bb1.wav";


// $(window).keydown(function (event) {
//     if (event.ctrlKey && (event.which == 86 || event.which == 118)) {
//         $('#C').trigger("click")
//         event.preventDefault();
//     }
// });