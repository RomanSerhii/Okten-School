import React, { Component } from "react";
import BlockWithText from "./components/BlockWithText/BlockWithText";
import Header from "./components/Header/Header";
import HeaderHzb from "./components/HeaderHzb/HeaderHzb";
import IncomeExpenseTracker from "./components/IncomeExpenseTracker/IncomeExpenseTracker";
import PictureComponent from "./components/PictureComponent";
import ProductCard from "./components/ProductCard/ProductCard";

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
        <HeaderHzb />
        <IncomeExpenseTracker />
        <BlockWithText
          title="Спробуйте React"
          text="React був розроблений із самого початку для поступового впровадження, і ви можете використовувати стільки або мало React, скільки вам потрібно. Незалежно від того, чи хочете ви спробувати React, додати трохи інтерактивності до простої HTML-сторінки чи запустити складну програму на базі React, посилання в цьому розділі допоможуть вам почати роботу.

"
        />
        <BlockWithText
          title="Ігрові майданчики онлайн"
          text="Якщо вам цікаво пограти з React, ви можете скористатися онлайн-майданчиком коду. Спробуйте шаблон Hello World на CodePen , CodeSandbox або Stackblitz .
          Якщо ви віддаєте перевагу використанню власного текстового редактора, ви також можете завантажити цей файл HTML , відредагувати його та відкрити з локальної файлової системи у вашому браузері. Він виконує повільне перетворення коду під час виконання, тому ми рекомендуємо використовувати це лише для простих демонстрацій.

"
        />
        <ProductCard
          title="Title 1"
          price="$29.99"
          description="test description"
        />
        <hr />
        <ProductCard
          title="Title 2"
          price="$49.99"
          description="test description 2"
        />
        <hr />
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
