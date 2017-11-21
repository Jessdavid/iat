
// take a single parameter from command line
// roll that many 6-sided dice

const commandLine = process.argv.splice(2)
const terminalNumber = parseInt(commandLine, 10);
console.log('term', terminalNumber, typeof terminalNumber);

// take a command line 
// function should take the command line number
// turn that number to an integer
// the number should be input into the function
// function should run as many times as command line input will allow


console.log(Math.random());

const getRandomNumber = (number) => {
    let i = 0;
    min = Math.ceil(min);
    console.log('min', min);
    max = Math.floor(max);
    console.log('max', max);
    do {
        const finalNumber = Math.floor(Math.random() * 7);
        console.log('final Number', finalNumber);
        i++;
    }
    while (i < number);  
}

getRandomNumber(terminalNumber, 7, 0);