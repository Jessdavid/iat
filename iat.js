const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ["blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

class Word {
    constructor(word, type){
        this.word = word;
        this.type = type;
    }
}

class GoodWord extends Word {
    constructor(word) {
    super(word, true)
    }
}

class BadWord extends Word {
    constructor(word) {
        super()
        this.word = word;
        this.type = false;
    }
}

const wordType = [
    new GoodWord('enjoy'), 
    new GoodWord('magnificent'), 
    new GoodWord('triumph'), 
    new GoodWord('cheer'),
    new BadWord('tragic'),
    new Word('awful', false),
    new Word('rotten', false),
    new Word('selfish', false)
];

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
            let word = hello.innerText = wordType[i].word
            let type = wordType[i].type
            
            // here we want to revamp to based on the flag, should something different happen?
            switch (true) {
                case (type === true) && (key === KEYS.I):
                console.log('yahh good word');
                break;
                case (type === true) && (key !== KEYS.I):
                wrongWord();
                break;
                case (type === false) && (key === KEYS.E):
                console.log('ohh bad word');
                break;
                case (type === false) && (key !== KEYS.E):
                wrongWord();
                break;
                default:
                console.log('actually none of these options');
            }
            
            i++;
            if (wordType.length === i) {
                i = 0;   
            } 
        }

        let end = new Date();
        elapsed = (end - start);
        timeLapses.push(elapsed);

        total = timeLapses.reduce((acc, curr) => acc + curr, 0);
        average = total / timeLapses.length;
    }

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



