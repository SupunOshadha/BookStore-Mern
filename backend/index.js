import  express, { response }  from "express";
// const express = require("express")
import {Port,mongoDBURL} from "./config.js"
// import { Book } from "../model/bookModel.js";
import mongoose from "mongoose";
import booksRouter from "./routers/booksRoute.js"
import cors from "cors";


const app = express();

//Middleware for parsing request body
app.use(express.json());


// Middleware for handling CORS POLICY (in terminal <npm i cors>)
// Option 1: Allow origins with default of cors(*)
//app.use(cors());
// OPtion 2: Allow custom Origins
app.use(
    cors({
        origin : ["http://localhost:5000/","https://mern-books-store-app.onrender.com"],
        methods: ["GET","POST","PUT","DELETE"],
        allowHeaders: ["Content-Type"],
    })
)


app.get("/",(req,res)=>{
    return res.status(200).send(`<h1 style="text-align:center;">Hello</h1>`)
})

app.use("/books", booksRouter)

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("App conneccted to the DB")
        app.listen(Port, ()=>{
            console.log(`App is listening to port: ${Port}`)
        })
    }).catch((error)=>{
        console.log(error)
    })