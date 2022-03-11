import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Cart from './components/Cart/Cart';
import LoginForm from './components/login/LoginForm';
import data from './data';
import React, {useState} from 'react';
// import Checkout from './components/Payment/checkout';
// import CreditCardForm from './components/Payment/CreditCardForm';

function App() {
  const {products} = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const existQty = cartItems.find((x) => x.id === product.id && x.qty < product.leftQuantity);
    if(exist){
      if(existQty){
        setCartItems(cartItems.map((x)=>x.id === product.id ? {...exist, qty : exist.qty+1} : x
          )
        );
      } else {
        alert(`Hết hàng!!`);
      }
    } else {
      setCartItems([...cartItems, {...product, qty:1}]);
    }
  };

  const onAdds = (product, quantity) => {
    const exist = cartItems.find((x) => x.id === product.id);
    const existQty = cartItems.find((x) => x.id === product.id && x.qty < product.leftQuantity);
    if(exist){
      if(existQty){
        setCartItems(cartItems.map((x)=>x.id === product.id ? {...exist, qty : exist.qty + quantity} : x
          )
        );
      } else {
        alert(`Hết hàng!!`);
      }
    } else {
      setCartItems([...cartItems, {...product, qty: quantity}]);
    }
  };


  const onRemove =(product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if(exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map((x)=>x.id === product.id ? {...exist, qty : exist.qty-1} : x
        )
      );
    }
  };

  const onClear =(product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState({email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details)

    if(details.email === adminUser.email && details.password === adminUser.password){
      console.log("Logged in");
      setUser({
        email: details.email
      });
    } else {
      console.log("Đăng nhập không thành công");
      setError("Đăng nhập không thành công")
    }
  }
  return (
    <div className="App">
    {(user.email !== "") ? (
      <div className = "mainMenu" >
        <Header/>  
        <div className="row">
          <Main onAdd={onAdd} onAdds={onAdds} products={products}></Main>
          <Cart cartItems={cartItems} onAdd={onAdd} onAdds={onAdds} onRemove={onRemove} onClear={onClear}></Cart>
        </div>
        <Footer />
      </div>
    ):(
      <LoginForm Login={Login} error = {error}/>
    )}    
  </div>
  );
}

export default App;
