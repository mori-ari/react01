import React, { useState, useEffect } from "react"; 
import styled from "styled-components";

const Booklist = (props) => {
    const [bookData, setBookData] = useState(null); 
  useEffect(() => {
        const result = props
      .getData?.(props.tags)
      .then((response) => setBookData(response));
  }, [props]);  
  return (
    <div>
      <ul>
        {
          bookData === null
          ?<p>now loading...</p>
          :bookData.data.items.map((x, index) => <li>{x.volumeInfo.title} ({x.volumeInfo.authors})</li>
          )
        }
      </ul>
  </div>
  );
};
export default Booklist;