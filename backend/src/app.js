import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// Configurations
app.use(cors({
    origin: config.cross_origin,
    credentials: true
}));

app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({ extended: true, limit: "1mb" }))
app.use(express.static("./public"));
app.use(cookieParser())


export { app }