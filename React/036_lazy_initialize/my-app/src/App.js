import { useState, useEffect, useLayoutEffect } from 'react'

function App() {
  const [value, setValue] = useState(100);
  
  // useEffect - 화면이 그려지고 난 후 실행됨 -> useLayoutEffect를 사용
  useLayoutEffect(() => {
    if (value >= 1000) {
      setValue(300);
    }
  }, [value]);
  
  return (
    <div>
      {/* <div style={{ width: value, height: value, backgroundColor: 'blue', transition: '1s all' }}></div> */}
      <div style={{ width: value, height: value, backgroundColor: 'blue' }}></div>
      <button onClick={() => {setValue(1000)}}>커져랏!</button>
      <button onClick={() => {setValue(200)}}>작아져랏!</button>
    </div>
  )
}

export default App;