import React from 'react';
// import Checkout from './components/Checkout';
import "./Cart.css";
export default function Cart(props) {
    const { cartItems, onAdd, onRemove, onClear } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.UnitPrice, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;

    const formatter = new Intl.NumberFormat('vn',{
      style: 'currency',
      currency: "VND",
    });

    const totalPrice = itemsPrice;
    return (
      <aside className="blockCart">
        <h2>Giỏ Hàng</h2>
        <div>
          {cartItems.length === 0 && <div>Giỏ hàng trống</div>}
          {cartItems.map((item) => (
            <div key={item.id} className="rowCart">
              <div style = {{flex: '1', marginLeft:'1em'}}>{item.name}</div>
              <div className="col-2">
                <button onClick={() => onAdd(item)} className="add">
                  +
                </button>
                <button onClick={() => onRemove(item)} className="remove">
                  -
                </button>
                <button onClick={() => onClear(item)} className="clear">
                  Xóa
                </button>
              </div>
  
              <div className="col-2 text-left">
                {item.qty}
                <br/>
                {formatter.format(item.UnitPrice.toFixed(0))}
              </div>
            </div>
          ))}
  
          {cartItems.length !== 0 && (
            <>
              <hr></hr>
              <div className="row">
                <div style = {{flex: '1', marginLeft:'1rem'}}>
                  <strong>Tổng tiền</strong>
                </div>
                <div className="col-2 text-right" > 
                  <strong>{formatter.format(totalPrice.toFixed(0))}</strong>
                </div>
              </div>
              <hr />
              <div className="row">
                <button onClick={(e) => {
                                                if (!window.confirm('Bạn muốn thanh toán?')) {
                                                  e.preventDefault();
                                                  
                                                }
                                            }}>
                  Thanh Toán
                </button>
              </div>
            </>
          )}
        </div>
      </aside>
    );
  }