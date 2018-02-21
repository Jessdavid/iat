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

const changeImage = () => {  
    gender.setAttribute("src", bias[i]);
    i++;
    if (bias.length === i) {
        i = 0;
    }
};

const hide = () => {
    let elem = document.getElementById('gender');
    elem.style.opacity = "0";
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
            hello.innerText = allWords[i]
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
        switch (true) {
            case (goodWords.includes(word)) && (key === KEYS.I):
                console.log('yahh good word');
            case (goodWords.includes(word)) && (key !== KEYS.I):
                console.log('oh wrong key for GOOD WORD');
            case (badWords.includes(word)) && (key === KEYS.E):
                console.log('ohh bad word');
            case (badWords.includes(word)) && (key !== KEYS.E):
                console.log('ohh wrong key for BAD WORD');
        }
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

// need to think about if I'm accessing and checking the words in the array properly

//     gender.setAttribute('src', redX);
//     setTimeout(hide, 2000);
//     gender.style.opacity = "1";



