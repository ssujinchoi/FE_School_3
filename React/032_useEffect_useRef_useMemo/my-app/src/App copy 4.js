import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0) // 재렌더링
  const [one, setOne] = useState(0)
  const [two, setTwo] = useState(0)
  const [three, setThree] = useState(0)

  let test = 0 // 일반변수의 변화 알아보기

  const handleCountUp = (e) => {
    setCount(count + 1)
  }

  const handleOneUp = (e) => {
    setOne(one + 1)
  }

  const handleTwoUp = (e) => {
    setTwo(two + 1)
  }

  const handleThreeUp = (e) => {
    setThree(three + 1)
  }


  const handleTestUp = (e) => {
    test += 1
    console.log(test);
  }


  // 감시하는 변수가 변했을때 동작할 행동을 useEffect를 이용해 구현
  // 재렌더링 될 때 실행
  useEffect(()=>{
    if (count % 2) {
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [one, two])
  
  return (
    <>
      <div>{one}</div>
      <button onClick={handleOneUp}>1Up!</button>
      <div>{two}</div>
      <button onClick={handleTwoUp}>2Up!</button>
      <div>3번은 재렌더링은 되지만 useEffect에서 감시하지않으므로 메서드 실행안됨.{three}</div>
      <button onClick={handleThreeUp}>3Up!</button>
      <div>다음은 count{count}</div>
      <button onClick={handleCountUp}>countUp!</button>
      <div>다음은 재렌더링 되는 것이 아니므로 useEffect가 실행되지 않는다. {test}</div>
      <button onClick={handleTestUp}>일반변수Up!</button>
    </>
  )
}

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;