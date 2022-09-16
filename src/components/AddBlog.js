import axios from "axios";
import React from "react";
import { useState } from "react";
import "./style.css"

function AddBlog() {
  const [formdata, setFormdata] = useState({
    title: "",
    description: "",
  });
  let handleFormSubmit = async (e) => {
    let response = await axios.post("http://localhost:3000/posts", formdata);

    if (response) {
      alert("data submitted successfully");
    } else {
      alert("oopps...");
    }

    setFormdata({
      title: "",
      description: "",
    });
  };
  return (
    <div id="mains">
      <h1>Write Your Blog</h1>
      <div>
        <div >
        <label htmlFor="title">Title</label>
        </div>
        <div>
        <input
        id="inp"
          type="text"
          value={formdata.title}
          onChange={(e) => setFormdata({ ...formdata, title: e.target.value })}
          required
        />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="descriptiion">Descriptiion</label>
        </div>

        <textarea
        
          name=""
          id="ta"
          cols="30"
          rows="10"
          value={formdata.description}
          onChange={(e) =>
            setFormdata({ ...formdata, description: e.target.value })
          }
          required
        ></textarea>
      </div>
      <input type="submit" onClick={handleFormSubmit} />
    </div>
  );
}

export default AddBlog;
