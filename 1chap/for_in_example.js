// obj 속성이 숫자형인 값을 모두 더해서 sum에 저장
var obj = {
    name: "object",
    age: 10,
    weight: 5
};

var sum = 0;
for (var propert in obj) {
    if (typeof(obj[property]) == "number") {
        sum = sum + obj[property];
    }
}