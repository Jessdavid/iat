const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ["blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

const goodWords = ['enjoy', 'magnificent', 'triumph', 'cheer', 'pleasure', 'cherish', 'delightful', 'fantastic'];

const badWords = ['tragic', 'awful', 'rotten', 'selfish', 'horrific', 'humiliate', 'grief', 'scorn'];

const tryAgain = ['try again', 'wrong category', 'please select the right category'];


let i = 0;

const changeImage = () => {
    faces.setAttribute("src", bias[i]);
    i++;
    if (bias.length === i) {
        i = 0;
    }
};

// let gender = document.getElementById('gender').innerText;


window.onkeyup = (event) => {
    let key = event.keyCode ? event.keyCode : event.which;
    // if (key === 69) {
    //     document.getElementById('gender').innerText = 'girl';
    //     console.log('left');
        
    //     faces.setAttribute("src", bias[i]);
    //     i++;
    //     if (bias.length === i) {
    //         i = 0;
    //     }
    // }
    
    // for(let word of goodWords) {
    //     if(key == 69) {
    //         console.log(word);
    //         newWord = word.concat('foh shizzle');
    //         console.log(newWord);
    //     } 
    // }

    if (key == 73) {
        // document.getElementById('gender').innerText = 'boy';
        console.log('right');
        hello.innerText = goodWords[i]
        i++;
        if (goodWords.length === i) {
            i = 0;
            
        } 
    } else {
        console.log('huh?');
        gender.innerText = tryAgain[i];
        i++;
        if (tryAgain.length === i) {
            i = 0;
        }
    }
 }
    