import React, { Component, Button } from 'react';
import Modal from 'react-modal';
import './food.css';

class Food extends React.Component {
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
  render() {
    const { isOpen, count } = this.state;
    return <div className="card" style={{ width: '18rem' }}>
      <img src={this.props.imgUrl} width="200" height="200" className="card-img-top" alt="Hamburger B" onClick={this.showPopup} />
      <div className="card-body" onClick={this.showPopup}>
        <h5 style={{ fontSize: 16 }} className="card-title">{this.props.name}</h5>
        <p className="card-text">Số lượng còn lại: {this.props.leftQuantity}</p>
        <p className="card-text">Đơn giá: {this.props.UnitPrice} đ</p>

        <a href="#" className="btn btn-primary">Thêm vào giỏ hàng</a>
      </div>

      <Modal className="food-modal" isOpen={isOpen} onRequestClose={this.hidePopup}>
        <div className="food-modal-header">
          <b className="food-modal-title">ADD TO CART</b>
          <i className="fas fa-times btnClose" onClick={this.hidePopup}></i>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-3 col-left">
              <img src={this.props.imgUrl} width="200" height="200" className="modal-image" alt="Hamburger B" onClick={this.showPopup} />
            </div>
            <div className="col col-right">
              <div className="row ">
                <div className="col col-left title-row">
                  Item
                </div>
                <div className="col col-left col2 title-row">
                  Unit Price
                </div>
              </div>
              <div className="row">
                <div className="col col-left">
                  {this.props.name}
                </div>
                <div className="col col-left col2" style={{ color: "red", fontWeight: "bold" }}>
                  VND {this.props.UnitPrice}
                </div>
              </div>
              <div className="row" >
                <div className="col col-left">
                  Quantity
                </div>
                <button type="button" className="btn btn-outline-primary mr-ml-15" onClick={this.handleCountDown}>-</button>
                <b>{count}</b>
                <button type="button" className="btn btn-outline-danger mr-ml-15" onClick={this.handleCountUp}>+</button>
              </div>
              <div className="row" style = {{marginTop: "40%"}}>
                <button type="button" className="btn btn-danger paybtn ">
                  <i className="fas fa-shopping-cart"></i> VND {count * this.props.UnitPrice}
                </button>
              </div>

            </div>
          </div>
        </div>
      </Modal>
    </div>

  }
}

export default Food;