import { useState, useMemo } from 'react'
// useMemo는 useEffect와 비슷. state가 있는 컴포넌트에 state 변화가 생기면 재평가 후 새로 랜더링
// 다른 점
// 메모이제이션 기법 사용(컴포넌트 성능 최적화에 사용)
// 대표 예) 피보나치 순열로 즉, 결과값을 어떠한 object에 가지고있게함.
// 부하가 생기는 함수를 반복해서 작업할 때 기억해두었다가 사용하는 기법. 렌더링시 이전에 작업해둔 결과값을 가지고 있다가 반영해줌.

function 부하(){
  let s = 0
  for (let i = 0; i < 1000000000; i++) {
    s += i
  }
  return s
}

// express도 경험해보세요~

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCountTwo] = useState(0)

  const result = useMemo(() => {
    return 부하()
  }, [count2])

  const handleCountUp = (e) => {
    setCount(count + 1)
    console.log(count);
  }
  
  const handleCountUpTwo = (e) => {
    setCountTwo(count2 + 1)
    console.log(count2)
  }

  console.log('랜더링!')

  return (
    <div>
      <h1>계산 결과 : {result}</h1>
      <div>count : {count}</div>
      <button onClick={handleCountUp}>One UP</button>
      <div>count2 : {count2}</div>
      <button onClick={handleCountUpTwo}>Two UP</button>
    </div>
  );
}
export default App;
