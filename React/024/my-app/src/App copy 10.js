function One() {
  return <p>One</p>
}

function Two() {
  return <p>Two</p>
}

function Three() {
  return <p>Three</p>
}

export default function App() {
  return (
    <div>
      {/*{[<One/>,<Two/>,<Three/>]}
      */}
      {/* 다중 array라도 중복된 key값을 가지고 있으면 안됩니다. */}
      {[
      // f()
      <One key='100'/>,
      <Two key='200'/>,
      <Three key='300'/>,
      [
        <One key='400'/>,
        <Two key='500'/>,
        [
          // 나와 같은 컴포넌트가 동일한 키를 가지고 있으면 error
          <One key='100'/>,
          // 나와다른 컴포넌트가 동일한 키를 가지고 있으면 에러가 나지 않음
          <Two key='100'/>
        ]
      ]
      ]}
    </div>
  );
}
