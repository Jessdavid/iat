const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ["blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

const goodWords = ['enjoy', 'magnificent', 'triumph', 'cheer'];

const badWords = ['tragic', 'awful', 'rotten', 'selfish'];
const allWords = goodWords.concat(badWords);

const redX = 'redx.png'

const KEYS = {
    I : 73,
    E: 69
}

let i = 0;

const hide = () => {
    let elem = document.getElementById('gender');
    elem.style.opacity = "0";
};

wrongWord = () => {
    gender.setAttribute('src', redX);
    setTimeout(hide, 2000);
    gender.style.opacity = "1";
};

let First = function () {
    this.a = 5;
    this.b = 2;
    console.log('hello', (this.a + this.b));
    return (this.a * this.b);
}

let p = Object.create(f);


p.tryFunction = function () {
    wrongWord();
    console.log('its the try function');
    return 4+3;
};

console.log('try running p as a function', p.tryFunction());
console.log('the b of p', p.a);
console.log('o', o());

f.prototype.b = 3;
f.prototype.c = 4;

const changeImage = () => {  
    gender.setAttribute("src", bias[i]);
    i++;
    if (bias.length === i) {
        i = 0;
    }
};


keyPressCount = 0;
timeLapses = [];


window.onkeyup = (event) => {
    let key = event.keyCode ? event.keyCode : event.which;
    
    measureTime = (event) => {
        let start = new Date();

        // here is where the activity to be measured occurs
        if (key === KEYS.I || key === KEYS.E) {
            keyPressCount++
            let start = Date.now();
            let word = hello.innerText = allWords[i]
            
            switch (true) {
                case (goodWords.includes(word)) && (key === KEYS.I):
                console.log('yahh good word');
                break;
                case (goodWords.includes(word)) && (key !== KEYS.I):
                wrongWord();
                break;
                case (badWords.includes(word)) && (key === KEYS.E):
                console.log('ohh bad word');
                break;
                case (badWords.includes(word)) && (key !== KEYS.E):
                wrongWord();
                break;
                default:
                console.log('actually none of these options');
            }
            
            i++;
            if (allWords.length === i) {
                i = 0;   
            } 
        }

        let end = new Date();
        elapsed = (end - start);
        timeLapses.push(elapsed);

        total = timeLapses.reduce((acc, curr) => acc + curr, 0);
        average = total / timeLapses.length;
    }

    allWords.forEach(checkingInclusion = (word) => {
        
    });
    
    if (keyPressCount === 12) {
        hello.innerText = "Categorize the words";
        let parentDiv = hello.parentNode;
        parentDiv.replaceChild(gender, hello);
    }

    if (keyPressCount >= bias.length) {
        changeImage();
    };

    measureTime();
}

// how to display the X properly, move the box - why does the white line appear at the beginning?
// adding instructions for beginning the test
// displaying the first word after the instructions
// creating the prototypes
// maybe after a button clicked and chosing the right test?
// take a look at the IAT tests itself



