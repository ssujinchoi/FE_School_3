import { BrowserRouter, Routes, Route, Link, useLocation, useParams, Outlet } from "react-router-dom";

function HomePage() {
  return <div>homepage</div>
}

function Products() {
  return <div>products</div>
}

function ProductsDetail() {
  const { idNum } = useParams()
  return <div>{ idNum }번 products</div>
}

function Users() {
  return <div>users</div>
}

function Notice() {
  return <div>공지사항</div>
}

function Coupon() {
  return <div>쿠폰</div>
}

function Question() {
  return <div>질문</div>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/products" element={<Products />}/>
        <Route path="/products:id" element={<ProductsDetail />}/>
        <Route path="/products:id/*" element={<Outlet />}>
          <Route path="/notice" element={<Notice/>}/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/users/*" element={<Outlet />}>
          <Route path="/coupon" element={<Coupon/>}/>
          <Route path="/question" element={<Question/>}/>
          <Route path="/notice" element={<Notice/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;