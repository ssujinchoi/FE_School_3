import React, { useEffect, useLayoutEffect, useState } from "react";

// 1. useLayoustEffect는 useEffectqㅗ다 먼저 실행됨. 즉, useEffect보다 먼저 실행하고 싶은 무언가가 있다면 사용하면된다.
// 2. 렌더링 되었을 때 useLayoutEffect return의 콜백함수가 실행 -> useLayoutEffect가 실행 -> useEffect return의 콜백함수가 실행 -> useEffect 실행
// 3. 깜빡임을 해결하고 싶다? useEffect -> useLayoutEffect
function App() {

  const [num, setNum] = useState(0)

  const handleonClick = () => {
    setNum(num + 1)
  }

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 1')
    return () => {
      console.log('useLayoutEffect return_1')
    }
  }, []) // []이면 최초의 한번만 실행 됨

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 2')
    return () => {
      console.log('useLayoutEffect return_2')
    }
  })

  useLayoutEffect(()=>{
    console.log('useLayoutEffect 3')
    return () => {
      console.log('useLayoutEffect return_3')
    }
  }, [num])

  useEffect(()=>{
    console.log('useEffect 1')
    return () => {
      console.log('useEffect return_1')
    }
  }, [])

  useEffect(()=>{
    console.log('useEffect 2')
    return () => {
      console.log('useEffect return_2')
    }
  })

  useEffect(()=>{
    console.log('useEffect 3')
    return () => {
      console.log('useEffect return_3')
    }
  }, [num])

  return (
    <button onClick={handleonClick}>{num}</button>
  );
}

const Wrap = ()=>{
  const [isVisible,setIsVisible] = useState(true)
  const handleClick = ()=> setIsVisible(!isVisible)
  return (
    <>
      <button onClick={handleClick}>{isVisible? "언마운트시키기" : "마운트시키기"}</button>
      <br></br>
      {isVisible&& <App />}
    </>
  )
}

export default Wrap;