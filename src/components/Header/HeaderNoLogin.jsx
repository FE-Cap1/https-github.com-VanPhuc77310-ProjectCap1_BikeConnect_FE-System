import React from 'react';
import logo from '../../assets/images/8.png';
import './HeaderNoLogin.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="nav">
                    <div className="logo">
                        <img src={logo} alt="Bike Connect Logo" className="logo-img" />
                    </div>
                    <div className="menu-items">
                        <a href="#" className="menu-link">Trang chủ</a>
                        <a href="#" className="menu-link">Cho thuê xe</a>
                        <a href="#" className="menu-link">Hướng dẫn</a>
                        <a href="#" className="menu-link">Chính sách</a>
                        <a href="#" className="menu-link">Hỗ trợ</a>
                    </div>
                    <div className="auth-buttons">
                        <button className="btn-register">Đăng ký</button>
                        <button className="btn-login">Đăng nhập</button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
