import {useState} from 'react'

function Contents({listName}) {
  if (listName === 'about') {
    return (
      <div>
        여기는 about입니다.
      </div>
    )

  } else if (listName === 'product') {
    return (
      <div>
        여기는 product입니다.
      </div>
    )
  } else if (listName === 'cart') {
    return (
      <div>
        여기는 cart입니다.
      </div>
    )
  } else if (listName === 'contact') {
    return (
      <div>
        여기는 contact입니다.
      </div>
    )
  }
  return (
    <div>404 Not Found : 페이지를 찾을 수 없습니다.</div>
  )
}
function Navbar() {
  const [listName, setListName] = useState('about')
  const handleCheckId = (e) => {
    setListName(e.target.id)
  }
  return (
    <>
      <nav>
        <ul>
          <li 
          id="about" style={listName === 'about' ? {color: "red"} : {color: "black"}} onClick={handleCheckId}>
            About
          </li>
          <li 
          id="product" style={listName === 'product' ? {color: "red"} : {color: "black"}} onClick={handleCheckId}>
            Product
          </li>
          <li 
          id="cart" style={listName === 'cart' ? {color: "red"} : {color: "black"}} onClick={handleCheckId}>
            Cart
          </li>
          <li 
          id="contact" style={listName === 'contact' ? {color: "red"} : {color: "black"}} onClick={handleCheckId}>
            Contact
          </li>
        </ul>
      </nav>
      <Contents listName={listName}/>
    </>
  )
}
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
    </div>
  );
}
