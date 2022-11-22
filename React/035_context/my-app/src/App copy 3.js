import { createContext } from 'react'

const Value = createContext({money: 1000})

function One() {
  return(
    <div>
      One
      <Two/>
    </div>
  )
}

function Two() {
  return (
    <div>
      Two
      <Three/>
    </div>
  )
}

function Three() {
  return (
    <Value.Consumer>
      {/* consumer는 자식 태그를 가질 수 없다. */}
      {(value) => (
        <div>
        Three<br/>
        money : {value.money}원 있습니다.
        </div>
      )}
    </Value.Consumer>
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

