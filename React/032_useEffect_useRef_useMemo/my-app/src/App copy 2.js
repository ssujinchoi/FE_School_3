import { useState, useEffect } from 'react'

function Counter (){
  const [count, setCount] = useState(0)
  
  const handleCountUp = (e) => {
    setCount(count + 1)
  }
  
  // count가 변했을 때 동작할 행동을 useEffect를 이용해 구현
  useEffect(() => {
    if (count % 2) { // count % 2 === 1과 같은 코드
      alert('홀수입니다.')
    } else {
      alert('짝수입니다.')
    }
  }, [count]) // 감시할 변수를 배열로 넣으면된다. 

  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>Up!</button>
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
