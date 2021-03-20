// App.jsx
import React from "react";
import Booklist from "./components/Booklist";
import Header from "./components/Header";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from "axios";

// 入力値に`books`を追加して出力するシンプルな関数を定義


const App = () => {
  const tags = ["デザイン", "プログラミング", "マーケティング"];
  const getDataFromAPI = async (keyword) => {
    const requestUrl ="https://www.googleapis.com/books/v1/volumes?q=intitle:";
    const result = await axios.get(`${requestUrl}${keyword}`);
    return result;
  }
  return (

    <BrowserRouter>
        <Header />
      <div>
        <h1>本の検索</h1>
        <ul>
          <li>
            <Link to="/01">デザイン</Link>
          </li>
          <li>
            <Link to="/02">プログラミング</Link>
          </li>
          <li>
            <Link to="/03">マーケティング</Link>
          </li>
        </ul>
        <hr />
        <Route
          exact
          path="/01"
          render={(props) => (
            <Booklist
            tags={tags[0]}
              getData={(keyword) => getDataFromAPI(keyword)} // getDataという名前で関数を渡す
            />
          )}
        />
        <Route
          path="/02"
          render={(props) => (
            <Booklist 
            tags={tags[1]}
            getData={(keyword) => getDataFromAPI(keyword)}
            />
          )} 
        />
        <Route
          path="/03"
          render={(props) => (
          <Booklist 
          tags={tags[2]}
          getData={(keyword) => getDataFromAPI(keyword)} 
          />
          )}
        />
      </div>
    </BrowserRouter>
  );
};
export default App;