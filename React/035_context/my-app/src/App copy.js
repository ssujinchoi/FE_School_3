// props로 받기
 const HelloLicat = (props) => {
   console.log(props)
   return (
     <div>
       <h2>{props.value.id}</h2>
       <strong>{props.value.name}</strong>
       <HelloLicatTwo value={{name:props.value.name, id: props.value.id}}/>
     </div>
   );
 };

 const HelloLicatTwo = (props) => {
   return (
     <div>
       <h2>Two : {props.value.id}</h2>
       <strong>Two : {props.value.name}</strong>
     </div>
   );
 };

 const App = () => {
   return (
     <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
   );
 };

 export default App;


// 구조분해 할당의 여러가지 방법
//const HelloLicat = ({value: {name, id}}) => {
//  //const {id, name} = value
//  return (
//    <div>
//      <h2>{id}</h2>
//      <strong>{name}</strong>
//      <HelloLicatTwo value={{name, id}}/>
//    </div>
//  );
//};

//const HelloLicatTwo = ({value}) => {
//  return (
//    <div>
//      <h2>Two : {value.id}</h2>
//      <strong>Two : {value.name}</strong>
//    </div>
//  );
//};

//const App = () => {
//  return (
//    <HelloLicat value={{ name: "gary", id: "garyIsFree" }} />
//  );
//};

//export default App;