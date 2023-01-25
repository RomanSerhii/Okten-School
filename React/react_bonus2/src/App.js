import React, { Component } from "react";
import Header from "./components/header/Header";
import PictureComponent from "./components/PictureComponent";

class App extends Component {
  render() {
    let data = [
      {
        msg: "hello KhmelnytskZalizobeton",
        iUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc1R3haV_dbcq04ybWIKX2KcvNGwlmjuMU6ILZaebP&s",
      },
      {
        msg: "hello KhmelnytskZalizobeton",
        iUrl: "https://www.bau.com.ua/tmp/hzb-logo-200x200.jpeg",
      },
      {
        msg: "hello KhmelnytskZalizobeton",
        iUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRVKa9p3TPH-5SolSaYQ0xuxEYew4-oB_azWU8hLf6g&s",
      },
    ];
    return (
      <div>
        <Header />
        {data.map((value) => (
          <PictureComponent
            {...value} // деструктиризація
            // msg={value.msg} iUrl={value.iUrl} // 2-ий варіант
          />
        ))}
      </div>
    );
  }
}

export default App;
