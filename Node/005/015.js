export function a() {
    console.log('a');
}

export function b() {
    console.log('b');
}

// export시 import쪽에서 객체의 형태로 받음
export function c() {
    console.log('c');
}

// default는 2개 이상일 수 없다. 
// 함수의 이름이 없어도 실행가능
// import 쪽에서 const a = d 이런식으로 받는 것임.
export default function d() {
    console.log('d');
}