var height = prompt("키를 입력해 주세요.");
console.log(height, typeof(height));

var height_int = parseInt(height);
// parseInt는 입력된 값의 앞부분에 문자가 있으면 NaN형으로 반환 (문자열의 앞부분에서 숫자를 추출하므로)
// NaN은 숫자형이지만 Not a Number의 약자로 숫자가 아니다라는 뜻을 가진 타입
// 이 외에도 특이한 숫자형으로 Infinity가 있다
console.log(height_int, typeof(height_int));
var height_float = parseInt(height);
console.log(height_float, typeof(height_float));