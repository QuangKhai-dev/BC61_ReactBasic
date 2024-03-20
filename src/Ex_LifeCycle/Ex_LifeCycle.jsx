import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Ex_LifeCycle = () => {
  const [number, setNumber] = useState(1);
  // useEffect sẽ có 3 trạng thái

  // trạng thái mounting (didmount) ==> trạng thái này sẽ chạy một lần duy nhất khi component hiển thị ==> gọi dữ liệu cho component
  useEffect(() => {
    console.log("Tôi là trạng thái mounting");
    axios({
      method: "GET",
      url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
      headers: {
        tokenCybersoft:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2MSIsIkhldEhhblN0cmluZyI6IjI4LzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNzQ4MTYwMDAwMCIsIm5iZiI6MTY5ODUxMjQwMCwiZXhwIjoxNzI3NjI5MjAwfQ.uWn4XmIr3aGBNm4QCi5Q5RFxVqNTwws8-EDFxQQud_I",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <p>Số: {number}</p>
      <button
        onClick={() => {
          setNumber(3);
        }}
      >
        Tăng
      </button>
    </div>
  );
};

export default Ex_LifeCycle;
