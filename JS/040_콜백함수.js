// callback function // 나중에 부르는 함수
// 함수를 아규먼트로 전달해서 코드어딘가에서 그 함수를 호출해주는 것
function sum(x, y, cbfunc) {
    // 1000줄
    cbfunc(x + y)
    // 1000줄
    return x + y
}

function documentWriter(s) {
    document.write('콜백함수', s)
}

sum(10, 20, documentWriter)
//sum(10, 20, console.log)

// map--------------------------- //
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])


let arr = [10, 20, 30, 40, 50]
arr.map(제곱)
//arr.map(x => x**2)

// 밑에 있어도 작동된다. 호이스팅!!
function 제곱(x) {
    return x ** 2
} // x => x**2 // x => {return x**2}

// forEach (IE에서 작동x)----------------------------- //
function 두배(x) {
    console.log(x * 2)
}

let arr2 = [10, 20, 30, 40, 50]
arr2.forEach(두배)

// 문제 : 화살표 함수를 사용해 아래 map과 동일한 기능을 하는 forEach문을 작성
let arr3 = [10, 20, 30, 40, 50]
arr3.map(x => x**2)

let result = []
arr3.forEach(e => {
    result.push(e ** 2)
})
console.log(result)