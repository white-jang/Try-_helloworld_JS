function makeCountFunction(initVal) {
    var count = initVal;
    function increase() {
        count++;
        console.log(count);
    }

    return increase;
}

var counter1 = makeCountFunction(0);
var counter2 = makeCountFunction(10);

counter1(); // 1
counter2(); // 11

// makeCountFunction()를 실행하면 increase 함수가 만들어지면서
// count 변수를 포함하는 환경이 하나의 클로저로 만들어짐
// 클로저를 활용하면 private나 public 개념을 구현할 수 있음