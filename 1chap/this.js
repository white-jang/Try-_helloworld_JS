function f() {
    console.log(this); // 어떤 객체의 속성에 바인드되어 호출된 것인지 출력
    // 전역 함수는 모두 window라는 객체에 바인드되어 있음
    console.log("f is called");
}

function setName(name) {
    this.name = name;
}

var o = {name: "object", method: f, setName: setName};
var o2 = {name: "", setName: setName};

f(); // f함수 그 자체로 호출
o.method(); // 객체 속성에 바인드된 함수 호출 (메소드 호출)

o.setName("object1");
o2.setName("object2");

console.log(o, o2);