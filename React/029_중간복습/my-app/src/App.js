import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import shoppingCart from './assets/icon-shopping-cart-white.svg'
import heartOn from './assets/icon-heart-on.svg'
import heartOff from './assets/icon-heart.svg'
// npx create-react-app my-app --template basic-react
// cd my-app
// npm install styled-components styled-reset

const GlobalStyle = createGlobalStyle`
  /* reset코드 + 커스텀reset코드 + 유틸리티코드 */
  /* 한 줄 말줄임, 두 줄 말줄임... */
  ${reset}
  span {
    color: red;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
  }
`

const ContainerMain = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 160px;
`

const ContainerProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  width: 1260px;
  margin-right: 60px;
`

const ItemProductList = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`
const ImgProduct = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 10px;
`

const IconShoppingCart = styled.a`
  // $표시와 중괄호를 같이 써야함
  background: #6327FE url(${shoppingCart}) no-repeat center / 40px 40px; 
  width: 80px;
  height: 80px;
  position: sticky;
  top: 60px;
  border-radius: 50%;
`

function Like(props) {
  const [like, setLike] = useState({heartOff});
   
  // ${heartOn}
  // ${heartOff}

  function handleClickLike() {
    setLike(like + 1);
  }

  return(
      <div>
          <button onClick={handleClickLike}>like : {like}</button>
          <span>{samyukgu}</span>
      </div>
  )
}

// 컴포넌트가 아니므로 함수명은 소문자
async function requests() {
  const response = await fetch('http://test.api.weniv.co.kr/mall');
  const data = await response.json();
  return data
}

function ProductList() {
  // useState() - 해당변수와 해당변수를 변경시킬 수 있는 함수를 불러옴
  const [productListData, setProductListData] = useState([]);
  const [dataLoadSwitch, setDataLoadSwitch] = useState(true);

  if (dataLoadSwitch) {
    requests().then(productData => setProductListData(productData));
    setDataLoadSwitch(false);
  }

  // 무한반복 - 화면은 제대로 나오지만 리소스가 낭비되고 있다. 해결방법은 뒤에 배울 것.
  //requests().then(productData => setProductListData(productData));
  //console.log(productListData);

  // 아래 코드는 promise
  //const ProductListData = requests()
  //console.log(ProductListData);

  return (
    <ContainerProductList>
      {productListData.map(item => 
        <ProductListItem 
          key={item.id} 
          productName={item.productName}
          thumbnailImg={item.thumbnailImg}
          price={item.price}
        />
      )}
    </ContainerProductList>
  )
}

function ProductListItem({productName, thumbnailImg, price}) {
  return (
    <ItemProductList>
      <ImgProduct src={"http://test.api.weniv.co.kr/" + thumbnailImg} alt={productName}/>
      <p>{productName}</p>
      <span>하트</span>
      <p>{price}</p>
    </ItemProductList>
  )
}

function ShoppingCart() {
  return <IconShoppingCart href="#"></IconShoppingCart>
}

function App() {
  return (
    <ContainerMain>
      <GlobalStyle/>
      <ProductList/>
      <ShoppingCart/>
    </ContainerMain>
  );
}
export default App;