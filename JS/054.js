// 블록안이라 let foo = 2 에 접근하려고 하는데 초기화되기전에 console.log로 호출해서... tdz...
let foo = 1;
{
    console.log(foo);
    let foo = 2;
}

// 원래 위와 같은 에러가 난다. 단, 크롬 콘솔창에서 쓰면 같은 에러가 아니라 foo_let not defined에러가 난다. 이것은 크롬브라우저에서 제공해주는 편의 기능이 아닐까 한다.
console.log(foo_let);

let foo_let = 123;