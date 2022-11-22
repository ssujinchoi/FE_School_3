import { useContext } from 'react'
import { data } from './data'
// 문제: props를 사용하지 않고 data.js변수를 load해와서
// useContext를 사용하여 다음을 구현
// 1. Three에서는 7개 아이템의 이름만 출력
// 2. Four에서는 7개 아이템의 가격만 출력
function One() {
  return(
    <Two />
  )
}

function Two() {
  return(
    <Three />
  )
}

// 7개 아이템의 이름만 출력
function Three() {
  return(
    <div>
      {useContext(data).map((v, i) =>
        <p key={i}>{v.productName}</p>
      )}
      <Four />
    </div>
  )
}

// 7개 아이템의 가격만 출력
function Four() {
  return(
    <div>
      {useContext(data).map((v, i) => 
        <p key={i}>{v.price}</p>
      )}
    </div>
  )
}

const App = () => {
   return (
     <div>
      <One/>
     </div>
   )
 }

 export default App;

