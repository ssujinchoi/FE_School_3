// One과 Two는 props를 사용하지 않음에도 계속 전달해줘야한다.
function One(props) {
  return(
    <div>
      <Two money={props.money}/>
    </div>
  )
}

function Two(props) {
  return (
    <div>
      <Three money={props.money}/>
    </div>
  )
}


function Three(props) {
  return (
    <div>
      money : {props.money}원 있습니다.
    </div>
  )
}

const App = () => {
  const value = 1000 // 이 값을 three에서 출력해보기
   return (
     <div>
      <One money={value}/>
     </div>
   )
 }

 export default App;

