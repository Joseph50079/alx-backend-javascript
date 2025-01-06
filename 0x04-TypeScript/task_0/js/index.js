
const calPoint = (array) => {
    let point = 0;
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i])) {
            result.push(Number(array[i]));
        }
        if (array[i] === 'D') {
            result.push(result[result.length - 1] * 2);
        }
        if (array[i] === 'C') {
            result.pop();
        }
        if (array[i] === '+') {
            result.push(result[result.length - 1] + result[result.length - 2]);
        }
    }
    return point = result.reduce((a, b) => a + b, 0);
}

console.log(calPoint(["5", "2", "C", "D", "+"])); // 30
console.log(calPoint(["5", "-2", "4", "C", "D", "9", "+", "+"])); // 27
console.log(calPoint(["1"])); // 1