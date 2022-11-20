// 오직 런타임에러에만 동작
try {
    // code
} catch(에러메시지) {
    // code
} finally {
    // code
}

//new Error(message);
//new SyntaxError(message);
//new ReferenceError(message);

// 아래 세 코드를 비교해보세요.
// 1.
try {
    let x = 10
    let y = 20
    console.log(x+y)
} catch(e) {
    console.log(e)
} finally {
    console.log('finally')
}
// 2. 일부기능은 수행 안될 수도 있으나 error가 나도 서비스는 정상적으로 작동. 
try {
    let x = 10
    let y = 20
    console.log(x+y+z)
} catch(e) {
    console.log(e)
} finally {
    console.log('finally')
}

// 3. z가 할당되지 않아서 서비스가 멈춥
let x = 10
let y = 20
console.log(x+y+z) // 일부러 error를 만들었을 때
let z = 30


// --------------------------
try {
    let x = 10
    let y = 20
    throw new Error('에러야!')
    console.log(x+y+z)
} catch(e) {
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console.log('end')
}

try {
    let x = 10
    let y = 20
    throw new SyntaxError('문법 에러야!')
    console.log(x+y+z)
} catch(e) {
    console.error(e)
    console.dir(e)
    console.error(e.message)
} finally {
    console.log('end')
}