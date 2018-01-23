const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ["blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

const goodWords = ['enjoy', 'magnificent', 'triumph', 'cheer', 'pleasure', 'cherish', 'delightful', 'fantastic'];

const badWords = ['tragic', 'awful', 'rotten', 'selfish', 'horrific', 'humiliate', 'grief', 'scorn'];

const redX = 'redx.png'


let i = 0;

const changeImage = () => {

    ('#hello').html("<img />");
    hello.setAttribute("src", bias[i]);
    i++;
    if (bias.length === i) {
        i = 0;
    }
};

const hide = () => {
    let elem = document.getElementById('gender');
    elem.style.opacity = "0";
}

keyPressCount = 0;

window.onkeyup = (event) => {
    let key = event.keyCode ? event.keyCode : event.which;
    if (key == 73) {
        keyPressCount++
    }

    console.log('keypress', keyPressCount);

    
    
    if (key == 73) {
        hello.innerText = goodWords[i]
        i++;
        console.log('length', goodWords.length);
        if (goodWords.length === i) {
            console.log('i', i);
            i = 0;   
        } 
    }

    if (keyPressCount > bias.length) {
        console.log(`toooo big + ${keyPressCount}`);
        hello.innerText = "Categorize the words";
        changeImage();
    }

 

    if (key == 69) {
        console.log('huh?');
        gender.setAttribute('src', redX);
        setTimeout(hide, 2000 );
        gender.style.opacity = "1";
    }

}

// elem = document.getElementById('gender')

// elem.style.display = "none" ? elem.style.display = "initial";

// let gender = document.getElementById('gender').innerText;

    // for(let word of goodWords) {
//     if(key == 69) {
//         console.log(word);
//         newWord = word.concat('foh shizzle');
//         console.log(newWord);
//     } 
// }

// if the number of keypresses is greater than the length of the array, then display the message 'You've 
// categorized all the work



