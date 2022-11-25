let me = {age: 30}
let you = me // 참조카운트 : 2

me = null // 참조카운트 : 1
you = null // 참조카운트 : 0 // you가 garbage collector의 대상이 됨

let x = {
    y: {
        z: 1
    }
}

// x가 참조하는 객체를 object1, y가 참조하고 있는 객체를 object2라고 가정

let a = x // object1의 참조카운트는 2 (x, a)
x = 1 // object1의 참조카운트는 1 (a)

let b = a.y // object2의 참조카운트는 2 (a.y, b)
a = 2 // object1의 참조카운트는? 0 ( )

// Object 1이 가비지컬렉터 대상이 되도 지워지지 않는다-> 이유는 object2에 아직 데이터가 있기에.
// 이렇게 불필요하게 남아있는 object1 객체가 존재하는 경우 메모리 누수(memory leak)가 발생했다고 표현

const aespa = ['카리나', '윈터', '닝닝', '지젤']
let arr = aespa.map((item) => {return item + '💖'})
console.log(arr)

aespa.forEach((item, index) => {
    aespa[index] = item + '💖'
})
