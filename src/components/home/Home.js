import React, { Component } from 'react';
import "./home.css"

class Home extends Component {
  render() {
    return (
      <div>
        <div className="main-billboard">
          메인 빎보드
        </div>
        <div className="category-list">
          <h3 className="category-title">카테고리 1</h3>
          <ul className="category-items">
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
          </ul>
        </div>
        <div className="category-list">
          <h3 className="category-title">카테고리 2</h3>
          <ul className="category-items">
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
            <li className="category-item">예능 </li>
          </ul>
        </div>

      </div>
    );
  }
}

export default Home;
