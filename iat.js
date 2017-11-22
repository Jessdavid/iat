const hello = document.getElementById('hello');
const gender = document.getElementById('gender');

const bias = ['redx.png', "blackwhitedemo/1.gif", "blackwhitedemo/2.gif", "blackwhitedemo/3.gif", "blackwhitedemo/4.gif", "blackwhitedemo/5.gif", "blackwhitedemo/6.gif", "blackwhitedemo/7.gif", "blackwhitedemo/8.gif","blackwhitedemo/9.gif"];

const goodWords = ['enjoy', 'magnificent', 'triumph', 'cheer', 'pleasure', 'cherish', 'delightful', 'fantastic'];

const badWords = ['tragic', 'awful', 'rotten', 'selfish', 'horrific', 'humiliate', 'grief', 'scorn'];

const redX = 'redx.png'


let i = 0;

const changeImage = () => {
    faces.setAttribute("src", bias[i]);
    i++;
    if (bias.length === i) {
        i = 0;
    }
};

const hide = () => {
    document.getElementById('gender').style.display = "none";
}

window.onkeyup = (event) => {
    let key = event.keyCode ? event.keyCode : event.which;

    if (key == 73) {
        hello.innerText = goodWords[i]
        i++;
        console.log('length', goodWords.length);
        if (goodWords.length === i) {
            console.log('i', i);
            i = 0;   
        } 
    } else {
        console.log('huh?');
        gender.setAttribute('src', redX);
        setTimeout(hide, 2000 );
    }
 }

// let gender = document.getElementById('gender').innerText;

    // for(let word of goodWords) {
//     if(key == 69) {
//         console.log(word);
//         newWord = word.concat('foh shizzle');
//         console.log(newWord);
//     } 
// }