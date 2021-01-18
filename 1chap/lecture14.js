var str = "abcdeabcde";
console.log(str.charAt(-1)); // 빈 문자열 (음수는 X)
console.log(str.charAt(str.length -1)); // 이렇게는 올바르게 출력

console.log(str.charAt(0));
console.log(str[1]);

console.log(str.substr(2, 4)); // 인덱스 2부터 4 전까지 substring
console.log(str.substring(2)); // 인덱스 2부터 마지막까지 
console.log(str.substring(-7)); // 뒤에서부터 7번째까지의 문자열
console.log(str.substring(-7, 2)); // 뒤에서 7번째부터 2번째까지

console.log(str.indexOf("bc")); // bc가 처음 나오는 곳의 인덱스
console.log(str.lastIndexOf("bc")); // bc가 마지막으로 나오는 곳의 인덱스
console.log(str.lastIndexOf("f")); // 없는 문자열은 -1 반환