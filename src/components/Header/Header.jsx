import React, { Component } from 'react'
import './Header.css';
import LoginForm from '../login/LoginForm';
class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a ><img src="img/restaurant.png" alt=""
                                width="40" height="40" /></a>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <h2>Restaurant POS @BKU 2021</h2>
                </li>
              </ul>
                <div className= "form-logout">
                  <a href="/" className="logout" onClick={(e) => {
                                                if (!window.confirm('Bạn chắc chắn Đăng xuất?')) {
                                                  e.preventDefault();
                                                  PUBLIC_URL
                                                }
                                            }}>
                        Đăng xuất
                    </a>
                </div>
            </div>
          </nav>
        )
    }
}
export default Header;