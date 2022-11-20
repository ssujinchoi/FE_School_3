function App() {
  const 변수 = 100;
  const 함수 = () => {return 10}
  const 값 = 10;
  return (
    <div>
      <p>
      {100 + 1}
      {'hello' + 'world'}
      {[1, 2, 3].map(x => x**2)}
      {함수()}
      {변수}
      {값?'one':'two'}
      </p>
    </div>
  );
}

export default App;