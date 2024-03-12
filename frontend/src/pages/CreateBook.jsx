import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import ShopImage from "../img/shop-img.jpg";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post(`https://bookstore-mern-l4yt.onrender.com/books`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  };
  return (
  <div className="p-4 bg-no-repeat bg-cover w-full h-screen text-white" style={{backgroundImage: `linear-gradient(to right, rgba(100,100,80,0.4), rgba(0,0,0,0.2)),url(${ShopImage})`}}>
    <BackButton />
    <h1 className="text-3xl my-4">Crete Book</h1>
    {loading ? <Spinner /> : ""}
    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
      <div className="my-4">
        <label className="text-xl mr-4 text-grey-500">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-grey-500">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
      </div>
      <div className="my-4">
        <label className="text-xl mr-4 text-grey-500">Publish Year</label>
        <input
          type="text"
          value={publishYear}
          onChange={(e)=>setPublishYear(e.target.value)}
          className="border-2 border-gray-500 px-4 py-2 w-full text-black"
          />
      </div>
      <button className="p-2 bg-sky-300 m-8" onClick={handleBook}>Save</button>
    </div>
  </div>
  )
};

export default CreateBook;
