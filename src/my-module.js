function sum(...numbers){
    let res = 0;
    for (let i = 0; i < numbers.length;i++){
        res += numbers[i];
    }
    return res;
}

const PI = 3.14;

function avg(...numbers){
    return sum(...numbers)/numbers.length;
}
export default avg;
export {sum as superSum,PI};
