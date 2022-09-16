import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import "./home.css"

const UpdateBlog = () => {
  const [data, setData] = useState([{}]);
  useEffect(() => {
    getUser();
    console.log(data);
  }, []);
  const getUser = async () => {
    await axios
      .get("http://localhost:3000/posts")
      .then((res) => setData(res.data));
  };
  const [updateData,setUpdateData]=useState({
    title:"",
    description:"",
    id:""
  })
  const handleDelete=async(id)=>{
    await axios
    .delete("http://localhost:3000/posts/"+id)
    .then((res)=>alert("deleted"));
    getUser();
  }
  const handleUpdate=async()=>{
    await axios
    .put(`http://localhost:3000/posts/${updateData.id}`,updateData)
    .then((res)=>{
      alert("data updated")
      getUser()
    })
  }

  return (
    <div id="main">
      <div id="mu">
        <h2 id="tit">Update Your Data Here</h2>
      <div>
        <div>
        <label htmlFor="title">Title</label><br />
        <input type="text" 
        value={updateData.title}
        onChange={(e)=>setUpdateData({...updateData,title: e.target.value})}
        required
        id="inpt"
        />
        </div>
        <div>
        <label htmlFor="descriptiion">Descriptiion</label>
        </div>
        <div>
            
            <textarea name="" id="" cols="30" rows="10" 
            value={updateData.description}
            onChange={(e)=>setUpdateData({...updateData,description: e.target.value})}
            required
            ></textarea>
        </div>
        <input type="submit" onClick={()=>handleUpdate()}/>
        </div>
      </div>
      {/* <h1>Title :</h1> */}
      {data &&
        data.map((user) => (
          <div id="container">
            <h2>{user.title}</h2>
            <p>{user.description}</p>
            <div id="btn">
              <button id="b1" 
              onClick={()=>setUpdateData({
                title: user.title,
                description: user.description,
                id: user.id

              })}
              >EDIT</button>
              <button id="b2" onClick={()=>{
                handleDelete(user.id)
              }}>DELETE</button>
            </div>
          </div>
          
        ))}
       
    </div>
  );
};

export default UpdateBlog;

