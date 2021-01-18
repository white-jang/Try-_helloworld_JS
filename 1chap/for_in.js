var obj = {
    name: "object",
    weight: 30,
    isObject: true,
    arr: [1, 2, 3],
    obj : {property: 1}
};

/*
Object.keys() 를 이용하여 속성 값에 접근하기
var property_list = Object.keys(obj);
console.log("Property List : ", property_list);

for (var i = 0; i < property_list.length; i++) {
    var propertyName = property_list[i];
    console.log("\t", propertyName, ": ", obj[propertyName]);
}
*/

for (var propertyName in obj) {
    console.log("\t", propertyName, ": ", obj[propertyName]);
    // []를 이용해서 속성 이름으로 속성 값에 접근할 수 있음 (속성 이름은 문자열이어야 함)
}

"name" in obj; // in만 쓰면 이 속성 이름 값이 객체에 존재하는지 검사
"age" in obj; // boolean형으로 반환