import { useEffect, useState } from 'react'

function getName() {
  console.log('오래기다리는 작업');
  return '개리님'
}

function App() {
  //const [name, setName] = useState(getName())
  const [name, setName] = useState(getName)
  const [num, setNum] = useState(0)

  return (
    <>
      <div>안녕하세요! {name}님 현재 숫자는 {num}입니다!</div>
      {/* onClick에 원래 handle~로하지만 여기선 콜백함수로 줌 */}
      <button onClick={() => setNum((p) => p + 1)}>{num}</button>
    </>
  );
}
export default App;
