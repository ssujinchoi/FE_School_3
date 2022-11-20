console.log('0' == 0) // true
console.log('0' === 0) // false
console.log(0 == false) // true
console.log(0 === false) // false

console.log(1 == true) // true
console.log(1 === true) // false

console.log('true' == true) // false
console.log('true' === true) // false
// 1. json에서 값을 가져올 때 true를 문자열로 가져와서 error
// 2. json에서 값을 가져올 때 true가 True로 되어 있어서 error

// 주의
console.log(0 == '') // true
console.log(0 === '') // false

console.log(false == '') // true
console.log(false === '') // false

console.log(false == null) // false
console.log(false === null) // false

console.log(false == undefined) // false
console.log(false === undefined) // false

// 아래 내용은 별도 파일로 분리해 설명
console.log(NaN ==  NaN) // false
console.log(NaN === NaN) // false

function truthyAndFalsy(value){
    return !!value
}

// 1. 비어있는 듯 하지만 length값을 가지고 있다. [].length === 0
// 2. 참조값으로 판단
truthyAndFalsy([]) // true // !주의 : 타 언어에서는 false
truthyAndFalsy({}) // true // !주의 : 타 언어에서는 false
truthyAndFalsy('') // false 
truthyAndFalsy(null) // false 
truthyAndFalsy(undefined) // false 
truthyAndFalsy(Infinity) // true 
truthyAndFalsy(-100) // true // 0이 아닌 숫자는 모두 true
truthyAndFalsy('hello') // true

console.log('---------드모르간 법칙----------');

// not (A or B) = (not A) and (not B)
// not (A and B) = (not A) or (not B)
// !(a % 3 == 0 || a % 5 == 0) // 아래 코드와 같습니다.
// !(a % 3 == 0) && !(a % 5 == 0) // 위 코드와 같습니다.

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0 || i % 5 == 0)) {
        console.log(i)
    }
}

for (let i = 0; i < 100; i++) {
    if (!(i % 3 == 0) && !(i % 5 == 0)) { // 하나라도 falsy이면 생략가능? 대체 뭘 생략?
        console.log(i)
    }
}


// or : ||
// and : &&
const x = 0;
const y = 1;
console.log(!(x || y) === (!x && !y));
console.log(!(x && y) === (!x || !y));

// 카오스
console.log([] == ![]) // true
console.log([] == 0) // true

// 과정
// 1. 빈 Array는 비교구문이 나왔을 때 강제로 숫자로 형변환이 된다.
console.log(0 == ![])

// 2. ![]는 false이다.
console.log(0 == false)

// 3. false는 0으로 평가된다.
console.log(0 == 0)