let m = new Map()
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)
    .set(true, '트루')
    .set([1, 2], '리얼리?')

console.log(m)
console.log(m.get('하나')) // 1출력
console.log(m.get(true))  // object에선 가능하지 않습니다.
console.log(m.get([1, 2]))  // 이렇게는 호출되지 않습니다. 각 객체는 다른 주소값을 가지므로 [1, 2]로 불러올 수 없다.

// Python Vs JavaScript 
// 1. Python
// python에서 아래 값은 다르게 나옵니다.
// x = [1, 2]
// id(x)

// y = [1, 2]
// id(y)

// x == y // python에서는 true
// x is y // python에서는 false

// 2. JavaScript
// [1, 2] === [1, 2] //false
// [1, 2] == [1, 2] // false
// let x = [1, 2]
// let y = [1, 2]
// x == y // false
// x === y // false

// 유린님 질문 : map은 객체 포함한 모든 값을 키로 사용할 수 있다 알고있는데...
let m2 = new Map()
let test = [1, 2]
m2.set('하나', 1)
    .set(true, '트루')
    .set(test, '리얼리?') 

console.log(m2.get(test)) // 이렇게는 호출됩니다. 메모리 주소가 같은 곳을 바라보고있기 때문

// ------------------------------------------
// Map에 값이 있는지 확인하기
m.has('하나')

// Map에서 값을 제거하기
m.delete('하나')
m.has('하나')

// map은 object를 어느정도 대체한다.
// 크기 구하기
m.size

let data = {'one':1, 'two':2} // console창에서 확인해보기

let data = new Map([['one',1], ['two',2]]) // o 
let data = new Map(Object.entries({'one':1, 'two':2})) // o // 위와 같은 형태로 만들기

//let data = new Map({'one':1, 'two':2}) // x
//let data = new Map('hello world') // x
//let data = new Map([10, 20, 30, 40]) // x

// -----------------------
// 직접 순회가 가능한 Map
let data5 = {'one':1, 'two':2}
for (const i of data5) { // 작동되지 않음
    console.log(i)
}

let data5 = {'one':1, 'two':2}
for (const i of Object.entries(data5)) { // 이렇게 바꿔야함.
    console.log(i)
}

let m3 = new Map()
m.set('하나', 1)
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)

for (const i of m3) { 
    console.log(i)
}

for (const [i, j] of m3) { 
    console.log(i, j)
}

m3.keys()
m3.values()
m3.entries()


// Map - Object 간의 형변환 ----------------------------
// 질문 : 다시 오브젝트로 바꾸지 않는 이유는 오브젝트가 할 수 있는걸 Map 이 모두 할 수 있기 때문에 굳이 안바꿔도 된다고 이해했는데 이렇게 이해해도 맞을까요? => 네
let 맵 = new Map(Object.entries({'one':1, 'two':2})) 
let 오브젝트 = Object.fromEntries(맵) // map을 object로 만드는 방법

// 참고 블로그 : https://shanepark.tistory.com/220 를 읽어보자!