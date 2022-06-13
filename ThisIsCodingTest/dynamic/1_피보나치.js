/**
 * 링크
    -
 * 문제
    -
 * 제한 조건
    -
 * 예시
    입력
      1.
    출력
      1.
 * 풀이
    1.
 * ETC
    -
*/

const memory = [0, 1, 1]

function fibonachi(n) {
	if (memory[n]) {
		return memory[n];
	}
	return memory[n] = fibonachi(n - 1) + fibonachi(n - 2);
}

console.log(fibonachi(11));
console.log(memory);
