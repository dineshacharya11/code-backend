import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials : true
})) //middleware

//configuration settings
app.use(express.json({limit : "16kb"})) //json format data
app.use(express.urlencoded({extended : true,limit : "16kb"}))// url format data
app.use(express.static("public")) //pdf, image stores in servers for public assets 
app.use(cookieParser())


export{ app }
