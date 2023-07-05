document.getElementById("myRange").oninput = function () {

    var value = (this.value - this.min) / (this.max - this.min) * 100
    this.style.background = 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + value + '%, #19171F ' + value + '%, #19171F )'
    output.innerHTML = this.value;
    checkStrength();

};

var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;

const upper = document.getElementById('uppercase');
const lower = document.getElementById('lowercase');
const number = document.getElementById('numbers');
const symbol = document.getElementById('symbols');
let bars = [0, 0, 0, 0];
let characterLength = 0;
let strength = 0;

upper.addEventListener("click", function () {
    if (upper.checked) {
        strength++;
        checkStrength();
        bars[0] = 1;

    }
    else {
        strength--;
        checkStrength();
        bars[0] = 0;
    }
});
lower.addEventListener("click", function () {
    if (lower.checked) {
        strength++;
        checkStrength();
        bars[1] = 1;
    }
    else {
        strength--;
        checkStrength();
        bars[1] = 0;
    }
});
number.addEventListener("click", function () {
    if (number.checked) {
        strength++;
        checkStrength();
        bars[2] = 1;
    }
    else {
        strength--;
        checkStrength();
        bars[2] = 0;
    }
});
symbol.addEventListener('click', function () {
    if (symbol.checked) {
        strength++;
        checkStrength();
        bars[3] = 1;
    }
    else {
        strength--;
        checkStrength();
        bars[3] = 0;
    }
});
let bar1 = document.getElementById("bar1");
let bar2 = document.getElementById("bar2");
let bar3 = document.getElementById("bar3");
let bar4 = document.getElementById("bar4");
function checkStrength() {
    if (slider.value >= 4) {
        switch (strength) {
            case 1:
                bar1.style.backgroundColor = '#A4FFAF';
                bar2.style.backgroundColor = '#18171F';
                bar3.style.backgroundColor = '#18171F';
                bar4.style.backgroundColor = '#18171F';
                break;
            case 2:
                bar1.style.backgroundColor = '#A4FFAF';
                bar2.style.backgroundColor = '#A4FFAF';
                bar3.style.backgroundColor = '#18171F';
                bar4.style.backgroundColor = '#18171F';
                break;
            case 3:
                bar1.backgroundColor = '#A4FFAF';
                bar2.style.backgroundColor = '#A4FFAF';
                bar3.style.backgroundColor = '#A4FFAF';
                bar4.style.backgroundColor = '#18171F';

                break;
            case 4:
                bar1.style.backgroundColor = '#A4FFAF';
                bar2.style.backgroundColor = '#A4FFAF';
                bar3.style.backgroundColor = '#A4FFAF';
                bar4.style.backgroundColor = '#A4FFAF';
                break;
            default:
                bar1.style.backgroundColor = '#18171F';
                bar2.style.backgroundColor = '#18171F';
                bar3.style.backgroundColor = '#18171F';
                bar4.style.backgroundColor = '#18171F';
        }
    }
    else {
        bar1.style.backgroundColor = '#18171F';
        bar2.style.backgroundColor = '#18171F';
        bar3.style.backgroundColor = '#18171F';
        bar4.style.backgroundColor = '#18171F';
    }
}

let button = document.getElementById('generate');
button.addEventListener("click", function () {
    document.getElementById('password').value = "";
    document.getElementById('generate').value = "";
    console.log(document.getElementById("myRange").value);
    characterLength = slider.value
    let low = "abcdefghijklmnopqrstuvwxyz";
    let up = low.toUpperCase();
    var num = '0123456789';
    var sym = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    var pass = "";
    if (characterLength >= bars[0] + bars[1] + bars[2] + bars[3]) {
        if (bars[0] == 1) {
            pass += up.charAt(Math.floor(Math.random() * up.length));
            characterLength--;
        }
        if (bars[1] == 1) {
            pass += low.charAt(Math.floor(Math.random() * low.length));
            characterLength--;
        }

        if (bars[2] == 1) {
            pass += num.charAt(Math.floor(Math.random() * num.length));

            characterLength--;

        }
        if (bars[3] == 1) {
            pass += sym.charAt(Math.floor(Math.random() * sym.length));

            characterLength--;
        }

        for (var i = 0, n = low.length; i < characterLength; ++i) {
            pass += low.charAt(Math.floor(Math.random() * n));
        }
    }
    console.log(document.getElementById('password').value);
    console.log(pass);
    document.getElementById('password').value += pass;
});

function copied() {
    let copyPassword = document.getElementById("password");
    copyPassword.select();
    navigator.clipboard.writeText(copyPassword.value);
    console.log("Copied the text: " + copyPassword.value);
}