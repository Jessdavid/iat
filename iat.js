const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ["blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

const goodWords = ['enjoy', 'magnificent', 'triumph', 'cheer', 'pleasure', 'cherish', 'delightful', 'fantastic'];

const badWords = ['tragic', 'awful', 'rotten', 'selfish', 'horrific', 'humiliate', 'grief', 'scorn'];

const redX = 'redx.png'

const KEYS = {
    I : 73,
    E: 69
}

let i = 0;

// const imgNode = document.createElement("img");

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

window.onkeyup = (event) => {
    let key = event.keyCode ? event.keyCode : event.which;
    
    measureTime = (event) => {
        let start = new Date();
        console.log('start', start);

        // here is where the activity to be measured occurs
        
        if (key == KEYS.I) {
            keyPressCount++
            let start = Date.now();
            hello.innerText = goodWords[i]
            i++;
            if (goodWords.length === i) {
                i = 0;   
            } 
        }

        let end = new Date();
        console.log('end', end);
        elapsed = (end - start);
        console.log('elapsed', elapsed);
    }
    

    if (keyPressCount === 8) {
        hello.innerText = "Categorize the words";
        let parentDiv = hello.parentNode;
        parentDiv.replaceChild(gender, hello);
    }

    if (keyPressCount > bias.length) {
        changeImage();
    };

    if (key == KEYS.E) {
        gender.setAttribute('src', redX);
        setTimeout(hide, 2000 );
        gender.style.opacity = "1";
    }
    
    measureTime();
}




// we want to measure the elapsed time between one keypress to the next keypress 
// we also need to keep the time of the last keypress and the time of the next keypress and then estimate 
// the difference

// we need to perform this measurement for every keypress

//step 1: get the time of the keypress
// step 2:  get the time of the next keypress
// step 3:  store the time of the keypress
// step 4: run the function for every time the keypress occurs
// step 5:  store the keypress in a chart
