let book = {
    bookName: '완전정복',
    price: '1000',
    author: '홍길동',
    date: '22.10.11'
}

let newBook = {}
// 예를 들어 form에서 입력 받은 값
newBook['bookName'] = 'Java'
newBook['price'] = '100000'
newBook['author'] = '세원'
newBook['date'] = '22.10.30'


// 위에걸 좀 더 편리하게 -> 생성자 함수
function Book(bookName, price, author, date) {
    //this = {} // new 사용시 내부적으로 생김
    this.bookName = bookName
    this.price = price
    this.author = author
    this.date = date
    //return this // new 사용시 내부적으로 생김
}

//let data = Book('css', 10, '유진', '22.12.11') // console에 찍으면 undefined - return이 없어서

// 코드 깔끔, 메모리적으로도 효율
// 동일한 프로퍼티를 가지는 객체 생성
let book1 = new Book('HTML', 100, '유진', '22.12.11') 
let book2 = new Book('CSS', 200, '김유진', '22.12.12') 
let book3 = new Book('JS', 30, '고유진', '22.12.13') 
