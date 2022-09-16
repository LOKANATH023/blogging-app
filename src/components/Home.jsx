import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./home.css"

const Home = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
    console.log(data);
  });
  const getUser = async () => {
    await axios
      .get("http://localhost:3000/posts")
      .then((res) => setData(res.data));
  };
  // const handleDelete=async(id)=>{
  //   await axios
  //   .delete("http://localhost:3000/posts/"+id)
  //   .then((res)=>alert("deleted"));
  //   getUser();
  // }

  return (
    <div id="main">
      {/* <h1>Title :</h1> */}
      {data &&
        data.map((user) => (
          <div id="container">
            <h2>{user.title}</h2>
            <p>{user.description}</p>
            {/* <div id="btn">
              <button id="b1" >EDIT</button>
              <button id="b2" onClick={()=>{
                handleDelete(user.id)
              }}>DELETE</button>
            </div> */}
          </div>
        ))}
    </div>
  );
};

export default Home;
