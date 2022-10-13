// 집합, 합집합, 교집합, 차집합

let s = new Set('abcdeeeee')

console.log(s)
console.log(s.size);

// 문제 -------------------------------------------------
회사게시판 = ['이호준', '이호준', '이호준', '홍길동', '홍길동', '이준근']

// 문제1 : 몇 명이 게시판에 게시물을 썼나요?
let st = new Set(회사게시판)
console.log(st.size)
// 문제2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of st) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of st) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}

// 다른 방법 1 : java의 getOrDefault하고 같은 원리
let map = new Map()
for (const i of 회사게시판) {
  map.set(i, (map.get(i) || 0) + 1) // 순회 돌면서 해당 key값을 업데이트 해주는 식. 없으면 0 + 1
} 

// 다른 방법 2
const result = {};
for (let person of 회사게시판) {
    result[person] = (result[person] ? result[person] : 0) + 1;
}
console.log(result);


// -------------------------------------------
let s2 = new Set('abcdeeeee')
s2.size
s2.add('f')

// set을 순환하기
for (let variable of s2) {
    console.log(variable)
}

// 값이 배열인 경우
let ss = new Set('abcdeeeeeeeee'.split(''))
console.log(ss);