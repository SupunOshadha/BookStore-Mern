import React, {useState} from 'react'
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from 'react-router-dom';

const CreateBook = () => {
  const[title, setTitle] = useState("");
  const[author, setAuthor] = useState("");
  const[publishYear, setPublishYear] = useState("");
  const[loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleBook=()=>{
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post()    
  }
  return (
    <div>CreateBook</div>
  )
}

export default CreateBook