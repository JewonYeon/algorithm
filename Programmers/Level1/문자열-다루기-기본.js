/**
 * 링크
    - https://programmers.co.kr/learn/courses/30/lessons/12918
 * 문제
    - 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
      예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 * 제한 조건
    - s는 길이 1 이상, 길이 8 이하인 문자열입니다.
 * 예시
    입력
      1. "a234"
      2. "1234"
    출력
      1. false
      2. true
 * 풀이
    1. 길이는 s.length
    2. 숫자는 isNaN(Number(s))으로 판단
 * ETC
    -
*/
