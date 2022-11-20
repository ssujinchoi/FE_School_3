import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

/*
// 최종 목표
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study/6
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo
https://www.studyin.co.kr/notice
https://www.studyin.co.kr/notice/recruit
https://www.studyin.co.kr/notice/business

// step 1
https://www.studyin.co.kr/
https://www.studyin.co.kr/login
https://www.studyin.co.kr/study
https://www.studyin.co.kr/notice

// step 2
https://www.studyin.co.kr/study/6 를 들어갔을 때에
<p>6번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 6번 게시물을 요청하셔야 합니다.</p>

// step 2
https://www.studyin.co.kr/study/6/chat
https://www.studyin.co.kr/study/6/memo 를 들어갔을 때에 각각

<p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 채팅방입니다.</p>
<p>6번 게시물에 오신것을 환영합니다. 여기는 6번 게시물의 메모방입니다.</p>
*/


function Index(){
  return <div>index</div>
}

function Login(){
  return <div>login</div>
}

function Study(){
  return <div>study</div>
}

function StudyDetail(props){
  // 이전 버전에서는 props로 처리했습니다.
  // console.log(props)
  
  const location = useLocation()
  // const params = useParams()
  const { num } = useParams()

  console.log(location)
  // console.log(params)
  console.log(num)

  // 예를 든겁니다.
  // fetch(`www.test.abc/${num}`)이런식으로 데이터를 가지고 와서 아래에다가 데이터를 뿌려주면 blog 형식이 완성되는 것입니다.

  return <div>{num}번 게시물에 오신것을 환영합니다. 여기서 fetch를 통해 백엔드로부터 {num}번 게시물을 요청하셔야 합니다.</div>
}

// function Test(){
//   const location = useLocation()
//   const { test } = useParams()
  
//   console.log(location)
//   console.log(test)

//   return <div>hello</div>
// }

function Chat() {
  const location = useLocation()
  const params = useParams()

  const chatNum = location.pathname.split('/')[2]

  // 호준 강사님이 하는 방식. 권하진 않는다고 하심. url 주소의 깊이가 깊어졌을 때 www/블라.com/a/b/c/d/e 이렇게 되었으 ㄹ때 앞에 있는 값이 필요한 경우가 종종 있어서 쓰신다고 하셨다.
  return <p>{chatNum}번 게시물에 오신것을 환영. 여기는 {chatNum}번 게시물의 채팅방. fetch를 통해 백엔드에서 채팅 정보를 받아와야한다.</p>
}

function Memo() {
  const location = useLocation()
  const { num } = useParams()

  return <p>{num}번 게시물에 오신것을 환영. 여기는 {num}번 게시물의 채팅방. fetch를 통해 백엔드에서 채팅 정보를 받아와야한다.</p>
}

function Notice(){
  return <div>notice</div>
} 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/study" element={<Study />}/>
        <Route path="/study/:num" element={<StudyDetail />}/>
        {/* <Route path="/study/:num/:test" element={<Test />}/> */}
        {/*<Route path="/study/:num/chat" element={<Chat />}/>*/}
        {/*<Route path="/study/:num/memo" element={<Memo />}/>*/}
        <Route path="/study/:num/*" element={<Outlet />}>
           <Route path="chat" element={<Chat />}/>
          <Route path="memo" element={<Memo />}/>
        </Route>
        <Route path="/notice" element={<Notice />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;