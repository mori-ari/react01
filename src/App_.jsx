import React from "react";
import Test from "./components/Test";
import Header from "./components/Header";
import Search from "./components/Booklist";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

// 入力値に`books`を追加して出力するシンプルな関数を定義
const App = () => {

  const shopCode = ["カラコン", "美容", "ダイエット"];
  const tags = ["カラコン", "02", "03"];
  const colors = ["赤", "青", "黄","緑"];
  const name = word =>{
    return `${word}色`;
  }
  const getDataFromAPI = async (keyword) => {
    const requestUrl ="https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  return (
    <BrowserRouter>
      <div className="t">
      <Header />
        <h1>タイトル</h1>
        <Test 
        colors ={colors[0]}
        getWord={word => name(word)}
         />
        <Test 
        colors ={colors[1]}
        getWord={word => name(word)}
         />
        <Test 
        colors ={colors[2]}
        getWord={word => name(word)}
         />
        <Test 
        getWord={word => name(word)}
         />

        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="/01">01</Link>
          </li>
          <li>
            <Link to="/02">02</Link>
          </li>
          <li>
            <Link to="/03">03</Link>
          </li>
        </ul>
        <hr />

        <Route
          exact
          path="/"
          render={(props) => (
            <Search
            shopCode={shopCode[0]}
              getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
            />
          )}
        />
        <Route
          path="/01"
          render={(props) => (
            <Search 
            shopCode={shopCode[0]}
            getData={(keyword) => getDataFromAPI(keyword)}
            />
          )} 
        />
        <Route
          path="/02"
          render={(props) => (
            <Search 
            shopCode={shopCode[1]}
            getData={(keyword) => getDataFromAPI(keyword)}
            />
          )} 
        />
        <Route
          path="/03"
          render={(props) => (
          <Search 
          shopCode={shopCode[2]}
          getData={(keyword) => getDataFromAPI(keyword)} 
          />
          )}
        />
      </div>

    </BrowserRouter>
  );
};
export default App;