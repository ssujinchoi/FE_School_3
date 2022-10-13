function a(){
    console.log(this)
}
a()

function b(){
    console.log('hello world')
}
b()
window.b()

let test = {
    one: 1,
    two: 2, 
    three: function(){
        console.log(this);
    }
}

test.three()

// 문제가 생기는 경우
let test2 = test.three

// 추가 예제----------------------------
function sayName(){
    console.log(this.name);
}

var name = 'Hero'

let peter = {
    name: 'Peter Parker',
    say: sayName
}

let bruce = {
    name: 'Albert Bruce',
    say: sayName
}

sayName() // 콘솔창에서 Hero출력. 윈도우에 입력되어있음
peter.say()
bruce.say()

// 함수안의 함수에서 this 
function a(){
    console.log(this.name);
    function b(){
        console.log(this.name);
    }
    b()
}

a()


function a(){
    console.log(this);
    function b(){
        console.log(this);
    }
    b()
}

a()

