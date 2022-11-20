/*
new Promise((resolve, reject) => {
    //code
})
.then(result => result)
.then(result => result)
.catch(err => err)
.finally(result => result)
*/

// - pending(대기상태) - resolve(해결) - fulfilled(성공)
// - pending(대기상태) - reject(거부) - rejected(실패)

// fetch는 프로미스를 반환한다!


// ---resolve---
let p = new Promise(function(resolve,reject){
    // 비동기적으로 실행될 code를 작성                                
    resolve('hello world')
}).then(메시지 => {
    alert(메시지) //  hello world
    return 메시지.split(' ')[0]
}).then(메시지 => { // 바로 위에서 return한 값이 메시지로 들어온다.
    alert(메시지) // hello
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) // h
    return 메시지
})

console.log(p)

// ---reject---
let p2 = new Promise(function(resolve,reject){
    // 비동기적으로 실행될 code를 작성
    reject('hello world')
}).then(메시지 => {
    alert(메시지) 
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지) 
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) 
    return 메시지
}).catch(메시지 => { 
    alert('catch 실행!!')
})

console.log(p2)

// -------reject는 rejected(실패)된 Promise를 반환---------
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
})
console.log(p)

// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환
// rejected 된 상태 -> catch를 실행했으므로 fullfilled(이행완료)
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).catch(메시지 => {
    alert('catch 실행!!')
})
console.log(p)

// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환(return 값 준 경우)
// rejected(실패)된 Promise를 catch로 받으면 fulfilled 반환
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    reject('hello world')
}).catch(메시지 => {
    alert('catch 실행!!')
    return 'catch!!'
})
console.log(p)

// ------------ resolve인데 중간에 error가 던져졌을 때 -----------------
let p3 = new Promise(function(resolve,reject){
    // 비동기적으로 실행될 code를 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지) 
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) 
    return 메시지
}).catch(메시지 => { 
    console.log(메시지)
    alert('catch 실행!!')
})

console.log(p3)

// ----------- 예제를 위한 예제로만 보자------------
let p4 = new Promise(function(resolve,reject){
    // 비동기적으로 실행될 code를 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지) 
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지) 
    return 메시지
}).catch(메시지 => { 
    console.log(메시지)
    alert('catch 실행!!')
}).then(메시지 => {
    alert('catch 이후에 then')
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => { 
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch실행')
})

console.log(p4)

// -------------- 일부러 시간이 좀 걸리게 작업 해보기 ------------
let pr = new Promise(function(resolve, reject){
    setTimeout(() => resolve('끝났다.'), 5000)
})
console.log('hello world')
console.log(pr)

// 5초 후에
console.log(pr)

// 실행하지 마세요. pending에 빠집니다.
// let p = new Promise(function(resolve, reject) {
//     console.log('hello world')
// }).then(d => console.log(d)).catch(e => console.log(e));


// ----예제를 위한 예제로만 보자 2-----
let p = new Promise(function(resolve, reject){
    // 비동기적으로 실행될 code 작성
    resolve('hello world')
}).then(메시지 => {
    alert(메시지)
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지)
    throw Error('Error 발생! 경고경고!')
    return 메시지[0]
}).then(메시지 => {
    alert(메시지)
    return 메시지
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 실행!!')
}).finally(메시지=>{
    alert('catch 이후에 finally') // but 관습적으로 마지막에 쓰는 것이지 뒤에 이어붙이는 것이 안되는 것은 아닙니다.
    throw Error('Error 발생! 경고경고!')
}).catch(메시지 => {
    console.log(메시지)
    alert('catch 이후에 then 이후에 catch 실행!!')
})


// -------우리가 뒤에서 배울 async나 fetch도 Promise를!?------
let test = async function(){
    return 'hello world'
}

test
test() // Promise {<fulfilled>: 'hello world'}

let data = fetch('http://test.api.weniv.co.kr/mall')
data


fetch('http://test.api.weniv.co.kr/mall')
    .then(메시지 => {
        console.log(메시지)
        return 메시지.json()
    })
    .then(메시지 => {
        console.log(메시지)
    })
    .catch(메시지 =>{
        // alert(메시지)
        alert('홈페이지가 정상적으로 작동하지 않고 있습니다. 조치중이오니 잠시만 기다려주시기 바랍니다.')
        console.log(메시지)
    })



// ----------------프로미스 체이닝의 다른 형태-----------------
// 모던 자바스크립트 예제
let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 10000); // (*)
});

console.log('hello world');
// code 1000줄

let p2 = p.then(function(result) { // (**)
    console.log(result); // 1
    return result * 2;
});

console.log('hello world2');
// code 1000줄

let p3 = p2.then(function(result) { // (***)
    console.log(result); // 2
    return result * 2;
});

console.log('hello world3');
// code 1000줄

let p4 = p3.then(function(result) {
    console.log(result); // 4
    return result * 2;
});

// --------프로미스 체이닝이 아님!!!----------
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

promise.then(function(result) {
    alert(result); // 1
    return result * 2;
});

