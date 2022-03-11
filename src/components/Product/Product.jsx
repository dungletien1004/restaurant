import './Product.css';
import './food.css';
import React, { Component, Button } from 'react';
import Modal from 'react-modal';


class Product extends React.Component {
  //const { product, onAdd } = props;
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      count: 1,
    }
    
  }
  showPopup = () => {
    this.setState({ isOpen: true });
  }

  hidePopup = () => {
    this.setState({ isOpen: false });
  }
  handleCountDown = () => {
    if (this.state.count > 1) {
      // setCount(count - 1);
      // cart(0,price * tax);
      this.setState({ count: this.state.count - 1 })
    }
  }
  handleCountUp = () => {

    // setCount(count + 1);
    // cart(1,price * tax);
    this.setState({ count: this.state.count + 1 })
  }
  currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  render() {
    const { isOpen, count } = this.state;

    return <div className="Item">
      <img src={this.props.product.imgUrl} className="small" width="190px" height="190px" alt={this.props.product.name} onClick={this.showPopup} />
      <h3 >{this.props.product.name}</h3>
      <div>Số lượng còn lại: {this.props.product.leftQuantity}</div>
      <div>Đơn giá: {this.currencyFormat(this.props.product.UnitPrice)} VNĐ</div>
      <div>
        <button onClick={() => { this.props.onAdd(this.props.product) }}>Thêm vào giỏ hàng</button>
      </div>
      <Modal className="food-modal" isOpen={isOpen} onRequestClose={this.hidePopup}>
        <div className="food-modal-header">
          <b className="food-modal-title">Thêm vào giỏ hàng</b>
          <i className="fas fa-times btnClose" onClick={this.hidePopup}></i>
        </div>
        <div className="container">
          <div className="row">
            <div >
              <img src={this.props.product.imgUrl} className="modal-image" alt="Hamburger B" onClick={this.showPopup} />
            </div>
            <div className="col col-right">
              <div className="row ">
                <div className="col col-left title-row">
                  Item
                </div>
                <div className="col col-left col2 title-row">
                  Đơn giá
                </div>
              </div>
              <div className="row">
                <div className="col col-left">
                  {this.props.product.name}
                </div>
                <div className="col col-left col2" style={{ color: "red", fontWeight: "bold" }}>
                  VND {this.currencyFormat(this.props.product.UnitPrice)}
                </div>
              </div>
              <div className="row" >
                <div className="col col-left">
                  Số lượng
                </div>
                <button type="button" className="remove" onClick={this.handleCountDown}>-</button>
                <b>{count}</b>
                <button type="button" className="add" onClick={this.handleCountUp}>+</button>
              </div>
              <div className="row" style = {{marginTop: "40%"}}>
                <button type="button" className="btn btn-danger paybtn " onClick={() => { this.props.onAdds(this.props.product,count) }}>
                  <i className="fas fa-shopping-cart"></i> VND {this.currencyFormat(count * this.props.product.UnitPrice)}
                </button>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>
  }
}
export default Product;
