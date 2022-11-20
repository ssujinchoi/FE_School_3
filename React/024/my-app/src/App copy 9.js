function App() {
  return (
    <Hello name="licat"/>
  );
}

function Hello(props) {
    const name = props.name;
    const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const numComponentsArray = num.map(v => <p key={v.toString()}>안녕{name} {v}호</p>)

    // key를 인덱스로 잡는 것은 권장하지 않음.
    //const numComponentsArray = num.map((v, i) => <p key={i.toString()}>안녕{name} {v}호</p>)

    console.log(numComponentsArray);

  return(
    <div>
      {/* 콤마를 없애고 요소를 밖으로 꺼내줌. 이것을 리스트로 렌더링 한다고 얘기합니다.*/}
      {/* 컴포넌트 안에서 list를 렌더링할 때는 key값을 넣어줘야한다. 컴포넌트안에서 유일(여기서 컴포넌트는 numComponentsArray)*/}
      {numComponentsArray}
      {/* index를 key로 쓰면 드물지만 이런경우가 생길 수 있으므로 권장하지 않음 - 키의 중복 */}
      {/*{numComponentsArray.concat(numComponentsArray)}*/}
      {/*<h1>안녕, {name} 1호</h1>
      <h1>안녕, {name} 2호</h1>
      <h1>안녕, {name} 3호</h1>
      <h1>안녕, {name} 4호</h1>
      <h1>안녕, {name} 5호</h1>
      <h1>안녕, {name} 6호</h1>
      <h1>안녕, {name} 7호</h1>
      <h1>안녕, {name} 8호</h1>
      <h1>안녕, {name} 9호</h1>
      <h1>안녕, {name} 10호</h1>*/}
    </div>
  )
}

export default App;