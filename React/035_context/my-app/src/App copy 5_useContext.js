import { useContext, createContext } from 'react'

const UserInfo = createContext({
  name: 'sujin',
  id: 'jiny',
  email: 'aaa@naver.com'
})

function One() {
  const {name, id, email} = useContext(UserInfo)

  return (
    <div>
      <p>{name}</p>
      <p>{id}</p>
      <p>{email}</p>
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

