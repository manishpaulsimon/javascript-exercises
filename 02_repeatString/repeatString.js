const repeatString = function(string,num) {
    if (num < 0) {
        return 'ERROR';
    }
    let array = '';
    for (let i=0;i<num;i++) {
        array += string;
    }
    return array;
};
function random() {
    const number = Math.floor(Math.random() * 1000);
    return number;
}

let newArray = repeatString('hey',3);
let newArray10 = repeatString('hey',10);
let newArray1 = repeatString('hey',1);
let newArray0 = repeatString('hey',0);
let newArrayError = repeatString('hey',-1);
let newArrayRandom = repeatString('hey',random());
let newArrayBlank = repeatString('',10);





// Do not edit below this line
module.exports = repeatString;
