import React from "react";
import {Link} from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>잘못된 페이지 경로 입니다.</h1>
      <p>
        요청하신 페이지가 사라졌거나, 잘못된 경로로 이용했습니다.
      </p>
      <button><Link to="/upload">홈으로 이동</Link></button>
    </>
  );
};