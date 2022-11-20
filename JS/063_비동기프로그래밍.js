// 동기 - 순차적
// 길동 : 로봇 청소기 돌리고(10시)
// 길동 : 빨래하고(11시)
// 길동 : 설거지하고(12시)
// 길동 : 요리한다(1시)

// 비동기 - 비순차적
// 길동 : 로봇 청소기 돌리면서(10시)
// 길동 : 빨래도 돌리고(10시)
// 길동 : 설거지하고(10시)
// 길동 : 요리할려고 물도 끓이고(10시)
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 1000);
console.log(three);

// 아래 코드는 왜 그럴까요?
const one = '1';
const two = '2';
const three = '3';

console.log(one);
setTimeout(() => {
    console.log(two);
}, 0);
console.log(three);

// 싱글쓰레드
// 일할 수 있는 녀석이 1명 -> JS

// 멀티쓰레드
// 일할 수 있는 녀석이 여러명 -> 다른언어 대부분이 지원합니다.

// 비동기 프로그래밍과, JavaScript의 실행 구조는 왜 알아야 하는가?

one() // 페이지 로드
two() // 서버에서 이미지와 상세 데이터 받아오기
three() // 읽어온 데이터를 뿌려주기
four() // 페이지에 정적 데이터 로드