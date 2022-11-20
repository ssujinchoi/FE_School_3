function Resume({이름, 취미, 자기소개}){
  let like = 0;
  
  function clickLike() {
    like += 1;
    
  }

  return (
    <section>
      <h2>{이름}</h2>
      <p>{취미}</p>
      <p>{자기소개}</p>
      {/* 리액트에서는 C가 대문자 */}
      <button onClick={clickLike}>{like}</button>
    </section>
  )
}

function App() {
  return (
    <main>
      <Resume 
        이름="최수진"
        취미="코딩"
        자기소개="안녕하세요. 대성할 최수진입니다"
      />
    </main>
  );
}

export default App;