import React from "react";
import "../css/Header.css";
import "../../Reset.css";
import inputImg from "../assets/link.svg";

function Header() {
  return (
    <header>
      <input />
      <div className="inputContents">
        <div>
          <img src={inputImg} />
          <span>링크를 추가해보세요.</span>
        </div>
        <button className="inputButton">추가하기</button>
      </div>
    </header>
  );
}

export default Header;
