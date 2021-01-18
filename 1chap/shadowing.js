/*
function shadowing_example() {
    console.log("F", val); // 0
    val++;
}

var val = 0;
shadowing_example();
console.log("o:", val); // 1
*/

function shadowing_example() {
    var val = 0; // local
    console.log("F", val); // 0
    val++;
}

var val = 0; // global
shadowing_example();
console.log("o:", val); // 0 함수가 실행될 때 가려짐(셰도잉)
