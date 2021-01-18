var arr = [1, 2, 3, 4, 5];
arr.pop(); // 맨 뒤에 있는 원소를 빼서 반환
arr.shift(); // 맨 앞에 있는 원소를 빼서 반환

arr.push(6); // 맨 끝에 원소 추가
arr.unshift(0); // 맨 앞에 원소 추가

arr.reverse(); // 원소 순서 뒤집기
arr.sort(); // 오름차순으로 원소들 정렬

var arr2 = [7, 8, 9];
var arr3 = arr1.concat(arr2); // 문자열과 마찬가지로 concat 사용 가능
// indexOf, lastIndexOf 또한 사용 가능

var str = "1, 2, 3, 4, 5";
var str_arr = str.split(","); // ,를 기준으로 나눠서 배열로 저장
// split 기준을 정규표현식으로도 사용할 수 있음